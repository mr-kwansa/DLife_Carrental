import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../lib/api";

const AdminLogin = () => {
  const navigate = useNavigate();
  // Local form and request state for login UX.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If an admin session already exists (httpOnly cookie), skip login form.
    const checkSession = async () => {
      const response = await fetch(apiUrl("/api/admin/session"), {
        method: "GET",
        // Required so browser includes auth cookie.
        credentials: "include",
      });
      if (response.ok) navigate("/admin/dashboard", { replace: true });
    };
    void checkSession();
  }, [navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Reset UI state before making a new login attempt.
    setLoading(true);
    setError("");

    try {
      // Credential exchange happens server-side; browser only stores secure cookie.
      const response = await fetch(apiUrl("/api/admin/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        // Preserve backend message for rate limits/invalid credentials.
        setError(data?.message || "Login failed.");
        return;
      }
      // Replace history so protected page becomes the current entry.
      navigate("/admin/dashboard", { replace: true });
    } catch {
      // Generic network error to avoid leaking implementation details.
      setError("Unable to reach server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10">
      <section className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to access admin tools.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Username/email input uses browser autofill semantics for admin login UX. */}
          <label className="block text-sm text-slate-700">
            Email
            <input
              type="email"
              required
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
            />
          </label>

          {/* Password field uses standard current-password autofill hint. */}
          <label className="block text-sm text-slate-700">
            Password
            <input
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 h-11 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-600"
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          {/* Button disabled during request to prevent duplicate submissions. */}
          <button
            type="submit"
            disabled={loading}
            className="h-11 w-full rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
