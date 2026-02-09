import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-800/95 backdrop-blur">
      <div className="flex w-full flex-wrap items-center justify-between px-10 py-6">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="images/dlife2-removebg-preview.png"
            className="h-32 w-auto"
            alt="DLIFE"
          />
        </Link>

        <div className="flex items-center gap-4 md:order-2">
          <button className="rounded-full bg-red-600 px-7 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-700">
            Book Now
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full text-gray-200 hover:bg-white/10 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-7 w-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        <div
          id="navbar-sticky"
          className={`${
            isOpen ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
        >
          <ul className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-gray-800/95 p-4 text-lg font-semibold text-gray-200 md:mt-0 md:flex-row md:gap-10 md:border-0 md:bg-transparent md:p-0">
            <li>
              <Link
                to="/"
                className="block rounded-xl bg-white/10 px-4 py-2 text-white md:bg-transparent md:px-0 md:py-0"
                aria-current="page"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/vehicles"
                className="block rounded-xl px-4 py-2 hover:bg-white/10 md:px-0 md:py-0 md:hover:bg-transparent md:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Vehicles
              </Link>
            </li>
            <li>
              <a
                href="#services"
                className="block rounded-xl px-4 py-2 hover:bg-white/10 md:px-0 md:py-0 md:hover:bg-transparent md:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block rounded-xl px-4 py-2 hover:bg-white/10 md:px-0 md:py-0 md:hover:bg-transparent md:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
