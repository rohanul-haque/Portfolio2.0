import { Facebook, Github, Linkedin, Sun, Moon, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "@/contexts/ThemeContexts";
import { assets, navlinks } from "@/assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  // Scroll detection for sticky navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className={`px-4 sm:px-8 lg:px-16 py-4 sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-[2px]"
          : "bg-transparent shadow-none"
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center space-x-2" to="/">
          <img
            className="w-10 h-10 rounded-full"
            src={assets.logo}
            alt="Logo"
          />
          <h1 className="font-bold text-xl text-gray-900 dark:text-white">
            Rohan <span className="text-blue-700 text-3xl">.</span>
          </h1>
        </Link>

        {/* Desktop NavLinks */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navlinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white px-3 py-1 rounded"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Desktop Social Icons */}
          <div className="hidden sm:flex space-x-2">
            <a
              className="p-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
              target="_blank"
              href="https://www.facebook.com/md.rohanul.haque.rohan"
            >
              <Facebook size={20} />
            </a>
          </div>
          <div className="hidden sm:flex space-x-2">
            <a
              className="p-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
              target="_blank"
              href="https://github.com/rohanul-haque"
            >
              <Github size={20} />
            </a>
          </div>
          <div className="hidden sm:flex space-x-2">
            <a
              className="p-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
              target="_blank"
              href="https://github.com/rohanul-haque"
            >
              <Linkedin size={20} />
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] z-50 bg-white dark:bg-slate-900 border-r transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close & Logo */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Link
            className="flex items-center space-x-2"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            <img
              className="w-10 h-10 rounded-full"
              src={assets.logo}
              alt="Logo"
            />
            <h1 className="font-bold text-xl text-gray-900 dark:text-white">
              Rohan <span className="text-blue-700 text-3xl">.</span>
            </h1>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col p-4 space-y-4 bg-white dark:bg-slate-900">
          {navlinks.map((link) => (
            <li key={link.id}>
              <NavLink
                onClick={() => setMenuOpen(false)}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-200 block ${
                    isActive
                      ? "bg-blue-500 text-white px-3 py-2 rounded"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Social Icons */}
        <div className="flex justify-center space-x-4 pt-4 pb-6 bg-white dark:bg-slate-900 w-full">
          <a
            target="_blank"
            href="https://www.facebook.com/md.rohanul.haque.rohan"
            rel="noopener noreferrer"
            className="p-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
          >
            <Facebook size={20} />
          </a>
          <a
            target="_blank"
            href="https://github.com/rohanul-haque"
            rel="noopener noreferrer"
            className="p-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
          >
            <Github size={20} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-rohanul-haque/"
            rel="noopener noreferrer"
            className="p-2 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-40 backdrop-blur-[1px]"
        />
      )}
    </header>
  );
};

export default Navbar;
