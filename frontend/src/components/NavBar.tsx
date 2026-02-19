import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 h-20 w-full border-b border-slate-200 bg-white">
      <div className="relative flex h-full w-full items-center justify-between pr-2 pl-0 sm:pr-4 sm:pl-0">
        <Link
          to="/"
          className={`relative z-10 -ml-4 flex h-20 items-center transition-opacity ${
            isOpen
              ? "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
              : "opacity-100"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <img src="public/images/Dlife_Logo.png" alt="DLIFE" className="h-42 w-auto" />
        </Link>
          {/* desktop view */}
        <ul className="hidden items-center gap-10 text-2xl font-medium text-slate-600 md:absolute md:left-1/2 md:z-20 md:flex md:-translate-x-1/2">
          <li>
            <Link to="/rent" className="hover:text-blue-700">
              Rent
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-700">
              Services
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700">
              About
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${isOpen ? "block" : "hidden"} border-t border-slate-200 bg-white md:hidden`}
      >
        <ul className="flex flex-col gap-4 px-4 py-5 text-lg font-medium text-slate-600">
          <li>
            <Link to="/rent" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
              Rent
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-700" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
