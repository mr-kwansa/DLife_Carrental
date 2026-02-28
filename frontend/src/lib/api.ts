// Centralized API base URL for admin/client fetch calls.
// VITE_API_URL lets environments (local/staging/prod) point to different backends.
const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(
  /\/$/,
  "",
);

// Normalizes path joining so callers can pass "/path" or "path".
export const apiUrl = (path: string) =>
  `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
