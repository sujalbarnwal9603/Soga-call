// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isScrolled
    ? "bg-slate-900/90 shadow-lg border-b border-white/10"
    : "bg-transparent";

  const textColor = "text-slate-100";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/40">
            <span className="font-extrabold text-lg text-white">S</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${textColor}`}>
            Soga<span className="text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center space-x-8 text-sm font-medium ${textColor}`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-cyan-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#features" className="hover:text-cyan-300 transition-colors duration-200">
              Features
            </a>
          </li>
          <li>
            <a href="#solutions" className="hover:text-cyan-300 transition-colors duration-200">
              Solutions
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-300 transition-colors duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="py-2 px-5 rounded-lg border border-white/10 bg-white/5 text-slate-100 text-sm font-medium hover:bg-white/10 hover:border-cyan-400/70 transition-all">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="py-2 px-5 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/40 hover:opacity-90 transition-all">
              Get started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-100 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-center bg-slate-950/95 border-t border-white/10 text-slate-100">
          <Link to="/" className="block py-1 hover:text-cyan-300">
            Home
          </Link>
          <a href="#features" className="block py-1 hover:text-cyan-300">
            Features
          </a>
          <a href="#solutions" className="block py-1 hover:text-cyan-300">
            Solutions
          </a>
          <a href="#contact" className="block py-1 hover:text-cyan-300">
            Contact
          </a>

          <Link to="/login">
            <button className="w-full mt-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-all">
              Log in
            </button>
          </Link>

          <Link to="/signup">
            <button className="w-full py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/40 hover:opacity-90 transition-all">
              Get started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
