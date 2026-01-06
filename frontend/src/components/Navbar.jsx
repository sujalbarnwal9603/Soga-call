import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-[#0e0e0e]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className={`text-2xl font-bold tracking-wide transition-colors duration-500 ${
            isScrolled ? "text-[#0e0e0e]" : "text-white"
          }`}
        >
          Soga<span className="text-blue-500">.</span>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center space-x-6 font-medium transition-colors duration-500 ${
            isScrolled ? "text-[#0e0e0e]" : "text-white"
          }`}
        >
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className={`py-2 px-5 rounded transition ${
              isScrolled
                ? "bg-[#0b1739] text-white hover:opacity-80"
                : "bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white hover:opacity-80"
            }`}
          >
            Sign In
          </button>
          <Link to="/login">
            <button
              className={`py-2 px-5 rounded font-bold transition ${
                isScrolled
                  ? "bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white hover:opacity-80"
                  : "bg-gradient-to-r from-white to-[#9eb1b7] text-[#0b1739] hover:opacity-80"
              }`}
            >
            Log In
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden focus:outline-none transition-colors duration-500 ${
            isScrolled ? "text-[#0e0e0e]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
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
        <div
          className={`md:hidden px-6 pb-4 space-y-3 text-center transition-all duration-500 ${
            isScrolled ? "bg-white text-[#0e0e0e]" : "bg-[#0e0e0e] text-white"
          }`}
        >
          <a href="#" className="block hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block hover:text-blue-500">
            Features
          </a>
          <a href="#" className="block hover:text-blue-500">
            Plans
          </a>
          <a href="#" className="block hover:text-blue-500">
            Contact
          </a>

          <button className="w-full py-2 rounded bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white hover:opacity-80 transition">
            Sign In
          </button>

          <button
            className={`w-full mt-3 py-2 rounded font-bold transition ${
              isScrolled
                ? "bg-gradient-to-r from-[#0b1739] to-[#1a2a6c] text-white hover:opacity-80"
                : "bg-gradient-to-r from-white to-[#9eb1b7] text-[#0b1739] hover:opacity-80"
            }`}
          >
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
