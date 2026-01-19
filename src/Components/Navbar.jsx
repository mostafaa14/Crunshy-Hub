import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaWaveSquare } from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Categories", path: "/categories" },
  { label: "Area", path: "/area" },
  { label: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // تغيير لون Navbar عند السكول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // شرط لإظهار background
  const hasBackground = scrolled || location.pathname !== "/";

  return (
    <header
      className={`fixed w-full z-50 transition-colors duration-500 ${
        hasBackground ? "bg-[#0A1017] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
            <Link className="block text-[#ffb606]" to="/">
              <FaWaveSquare className="h-8 w-8" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {navLinks.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `transition font-medium ${
                          isActive
                            ? "text-[#ffb606]"
                            : "text-gray-500 dark:text-white"
                        } hover:text-[#ffb606]`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="
                rounded-md border border-transparent
                bg-[#ffb606] px-5 py-2.5
                text-sm font-medium text-white
                transition duration-500
                hover:bg-transparent hover:text-[#ffb606] hover:border hover:border-[#ffb606]
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
                rounded-md border border-[#ffb606]
                px-5 py-2.5 text-sm font-medium
                text-[#ffb606] transition duration-500
                hover:bg-[#ffb606] hover:text-white
              "
            >
              Register
            </Link>

            {/* Mobile Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <HiBars3 className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800">
          <nav className="bg-white dark:bg-[#0A1017] px-4 py-4">
            <ul className="space-y-4 text-sm">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block transition font-medium ${
                        isActive
                          ? "text-[#ffb606]"
                          : "text-gray-500 dark:text-white"
                      } hover:text-[#ffb606]`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
