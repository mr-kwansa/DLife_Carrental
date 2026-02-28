const crypto = require("crypto");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Core runtime and security configuration for the admin surface.
const PORT = Number(process.env.PORT || 5000);
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";
const ALLOWED_ORIGINS = new Set([
  FRONTEND_ORIGIN,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
]);
const SESSION_COOKIE_NAME = "dlife_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours
const LOGIN_WINDOW_MS = 1000 * 60 * 15; // 15 minutes
const LOGIN_MAX_ATTEMPTS = 5;
const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@dlife.local";
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "change-me-now";

// trust proxy is required so req.ip and secure-cookie behavior are correct behind reverse proxies.
app.set("trust proxy", 1);
app.use(
  cors({
    // Allow known local frontend origins for credentialed admin requests.
    origin(origin, callback) {
      // Allow non-browser requests (no Origin header), e.g., curl/postman.
      if (!origin) return callback(null, true);
      if (ALLOWED_ORIGINS.has(origin)) return callback(null, true);
      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  }),
);
// Keep payloads small for auth endpoints and reduce abuse surface.
app.use(express.json({ limit: "100kb" }));

// Baseline hardening headers for admin endpoints.
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  next();
});

// Temporary in-memory admin account list.
// In production, replace with database-backed users and password reset flow.
const users = [
  {
    id: "admin-1",
    email: DEFAULT_ADMIN_EMAIL.toLowerCase(),
    role: "super_admin",
    passwordHash: hashPassword(DEFAULT_ADMIN_PASSWORD),
  },
];

// In-memory stores for sessions, login throttling, and audit history.
// Replace with Redis/DB for multi-instance deployments.
const sessions = new Map();
const loginAttempts = new Map();
const auditLogs = [];

if (!process.env.ADMIN_PASSWORD) {
  console.warn(
    "[SECURITY] ADMIN_PASSWORD is not set. Using an insecure default password for local development only.",
  );
}

// Password hashing uses scrypt with random salt.
// Stored format: salt:hash
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

// Uses constant-time comparison to avoid timing attacks on hash checks.
function verifyPassword(password, storedHash) {
  const [salt, key] = storedHash.split(":");
  if (!salt || !key) return false;
  const suppliedKey = crypto.scryptSync(password, salt, 64);
  const storedKey = Buffer.from(key, "hex");
  if (storedKey.length !== suppliedKey.length) return false;
  return crypto.timingSafeEqual(storedKey, suppliedKey);
}

// Minimal cookie parser for extracting session token from request headers.
function parseCookies(req) {
  const header = req.headers.cookie;
  if (!header) return {};
  return header.split(";").reduce((acc, part) => {
    const [rawName, ...rawValue] = part.trim().split("=");
    if (!rawName) return acc;
    acc[decodeURIComponent(rawName)] = decodeURIComponent(rawValue.join("="));
    return acc;
  }, {});
}

// Issues secure session cookie settings used by admin auth.
function setSessionCookie(res, token) {
  const secure = process.env.NODE_ENV === "production";
  const cookieParts = [
    `${SESSION_COOKIE_NAME}=${encodeURIComponent(token)}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Strict",
    `Max-Age=${Math.floor(SESSION_TTL_MS / 1000)}`,
  ];
  if (secure) cookieParts.push("Secure");
  res.setHeader("Set-Cookie", cookieParts.join("; "));
}

// Removes session cookie during logout or invalid-session cleanup.
function clearSessionCookie(res) {
  const secure = process.env.NODE_ENV === "production";
  const cookieParts = [
    `${SESSION_COOKIE_NAME}=`,
    "HttpOnly",
    "Path=/",
    "SameSite=Strict",
    "Max-Age=0",
  ];
  if (secure) cookieParts.push("Secure");
  res.setHeader("Set-Cookie", cookieParts.join("; "));
}

// Appends an audit record for sensitive admin actions.
// This is intentionally capped to prevent unbounded memory growth.
function audit(action, req, details = {}) {
  const record = {
    id: crypto.randomUUID(),
    action,
    at: new Date().toISOString(),
    ip: req.ip,
    userAgent: req.get("user-agent") || "unknown",
    details,
  };
  auditLogs.unshift(record);
  if (auditLogs.length > 200) auditLogs.pop();
}

// Auth middleware:
// 1) reads cookie token
// 2) validates session presence + expiry
// 3) attaches sanitized user context to request
function authRequired(req, res, next) {
  const cookies = parseCookies(req);
  const sessionToken = cookies[SESSION_COOKIE_NAME];
  if (!sessionToken) {
    return res.status(401).json({ message: "Authentication required." });
  }

  const session = sessions.get(sessionToken);
  if (!session || session.expiresAt <= Date.now()) {
    sessions.delete(sessionToken);
    clearSessionCookie(res);
    return res.status(401).json({ message: "Session expired. Please log in again." });
  }

  const user = users.find((entry) => entry.id === session.userId);
  if (!user) {
    sessions.delete(sessionToken);
    clearSessionCookie(res);
    return res.status(401).json({ message: "Invalid session user." });
  }

  req.user = { id: user.id, email: user.email, role: user.role };
  req.sessionToken = sessionToken;
  next();
}

// RBAC middleware to enforce per-endpoint role permissions.
function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Insufficient permissions." });
    }
    next();
  };
}

// Sliding-window login throttling by client IP.
// Limits brute-force attempts against admin login.
function isRateLimited(ip) {
  const current = loginAttempts.get(ip);
  const now = Date.now();
  if (!current || now > current.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return false;
  }

  if (current.count >= LOGIN_MAX_ATTEMPTS) {
    return true;
  }

  current.count += 1;
  return false;
}

// Resets throttling state on successful authentication.
function clearRateLimit(ip) {
  loginAttempts.delete(ip);
}

app.get("/", (req, res) => {
  res.send("DLIFE Car Rental API running");
});

// Admin login endpoint:
// - validates credentials
// - enforces rate limits
// - creates server-side session
// - sets httpOnly cookie
// - records audit trail
app.post("/api/admin/login", (req, res) => {
  const ip = req.ip || "unknown";
  if (isRateLimited(ip)) {
    audit("admin_login_rate_limited", req, { email: req.body?.email || "" });
    return res
      .status(429)
      .json({ message: "Too many failed login attempts. Try again in 15 minutes." });
  }

  const email = String(req.body?.email || "").trim().toLowerCase();
  const password = String(req.body?.password || "");
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  const user = users.find((entry) => entry.email === email);
  if (!user || !verifyPassword(password, user.passwordHash)) {
    audit("admin_login_failed", req, { email });
    return res.status(401).json({ message: "Invalid email or password." });
  }

  clearRateLimit(ip);

  const token = crypto.randomBytes(48).toString("base64url");
  sessions.set(token, {
    userId: user.id,
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_TTL_MS,
  });
  setSessionCookie(res, token);
  audit("admin_login_success", req, { userId: user.id, email: user.email });

  return res.status(200).json({
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
});

// Ends current session and clears cookie.
app.post("/api/admin/logout", authRequired, (req, res) => {
  sessions.delete(req.sessionToken);
  clearSessionCookie(res);
  audit("admin_logout", req, { userId: req.user.id });
  res.status(200).json({ message: "Logged out." });
});

// Lightweight endpoint used by frontend to confirm session validity.
app.get("/api/admin/session", authRequired, (req, res) => {
  res.status(200).json({ user: req.user });
});

// Admin-only metrics endpoint used by dashboard cards.
app.get("/api/admin/dashboard-stats", authRequired, requireRole("admin", "super_admin"), (req, res) => {
  res.status(200).json({
    activeSessions: sessions.size,
    usersWithAdminAccess: users.length,
    role: req.user.role,
  });
});

// Super-admin endpoint to inspect security-relevant activity.
app.get("/api/admin/audit-logs", authRequired, requireRole("super_admin"), (req, res) => {
  res.status(200).json({ logs: auditLogs });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
