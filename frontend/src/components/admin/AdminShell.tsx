import { useEffect, useState } from "react";
import {
  FaBars,
  FaBell,
  FaCarSide,
  FaChartLine,
  FaXmark,
  FaUsers,
  FaArrowRightFromBracket,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { apiUrl } from "../../lib/api";

type AdminUser = {
  id: string;
  email: string;
  role: string;
};

const navItems = [
  { label: "Dashboard", to: "/admin/dashboard", icon: FaChartLine },
  { label: "Fleet", to: "/admin/fleet", icon: FaCarSide },
  { label: "Customers", to: "/admin/customers", icon: FaUsers },
];

const AdminShell = () => {
  const navigate = useNavigate();
  // Shared authenticated user context for the three admin sections.
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  // Mobile drawer state for responsive sidebar behavior.
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Guard all admin routes by validating the current server-side session.
    const checkSession = async () => {
      try {
        const response = await fetch(apiUrl("/api/admin/session"), {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          navigate("/admin/login", { replace: true });
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch {
        navigate("/admin/login", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    void checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await fetch(apiUrl("/api/admin/logout"), {
      method: "POST",
      credentials: "include",
    });
    navigate("/admin/login", { replace: true });
  };

  if (loading) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-100 px-4">
        <p className="text-sm text-slate-600">Loading admin panel...</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile top bar with drawer toggle for small screens. */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <button
            type="button"
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
            aria-label="Toggle admin navigation"
          >
            {sidebarOpen ? <FaXmark /> : <FaBars />}
          </button>
          <p className="text-sm font-semibold text-slate-800">Admin Panel</p>
          <button
            type="button"
            onClick={handleLogout}
            className="text-sm font-medium text-slate-600"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="grid w-full grid-cols-1 bg-slate-100 lg:grid-cols-[250px_1fr]">
        {/* Desktop sidebar + mobile drawer with only allowed admin sections. */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 bg-white px-4 py-6 transition lg:static lg:w-auto lg:flex lg:min-h-screen lg:flex-col lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6 flex items-center justify-between lg:justify-start">
            <div className="-ml-3">
              <img src="/images/Dlife_Logo.png" alt="DLIFE" className="h-16 w-auto" />
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
              aria-label="Close navigation"
            >
              <FaXmark />
            </button>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icon className="text-sm" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-auto rounded-xl border border-slate-200 bg-blue-50 p-3">
            <p className="text-[11px] font-bold tracking-wide text-blue-700 uppercase">
              Support Plan
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Signed in as <span className="font-semibold">{user?.role}</span>
            </p>
            <p className="mt-1 truncate text-xs text-slate-500">{user?.email}</p>
            <button
              type="button"
              onClick={handleLogout}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
            >
              <FaArrowRightFromBracket />
              Log out
            </button>
          </div>
        </aside>

        {sidebarOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-slate-900/30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation overlay"
          />
        ) : null}

        {/* Main content area shared by Dashboard, Fleet, and Customers pages. */}
        <div className="min-w-0 flex flex-1 flex-col min-h-screen">
          <header className="sticky top-0 z-20 hidden border-b border-slate-200 bg-white lg:block">
            <div className="flex h-18 items-center gap-4 px-6">
              <div className="min-w-0">
                <p className="text-2xl font-bold text-slate-900">Operations Overview</p>
                <p className="text-xs text-slate-500">Management Portal - DLife Car Rentals</p>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <label className="relative hidden w-72 xl:block">
                  <FaMagnifyingGlass className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-xs text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search operations..."
                    className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pr-3 pl-8 text-sm text-slate-700 outline-none focus:border-blue-500"
                  />
                </label>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100"
                  aria-label="Notifications"
                >
                  <FaBell className="text-xs" />
                </button>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5">
                  <img
                    src="https://i.pravatar.cc/64?img=5"
                    alt="Admin profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-slate-900">Sarah Connor</p>
                    <p className="text-[11px] text-slate-500">Operations Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
          {/* Reuse the existing site footer as requested. */}
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminShell;
