import React from "react";
import logo from "../assets/logo.png";

function Navbar({ page, search, setSearch, theme, setTheme }) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 shadow-lg transition-colors
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-3 justify-between items-center">

         {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="PixelVault Logo"
            className="h-9  object-contain rounded-full"
          />
          <h1 className="text-xl font-extrabold tracking-wide">
           SnapGallery
          </h1>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`px-3 py-1 rounded outline-none text-sm
          ${theme === "dark"
            ? "bg-gray-800 text-white placeholder-gray-400"
            : "bg-gray-200 text-black placeholder-gray-600"}`}
        />

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Page */}
          <span className="text-sm opacity-70">
            Page {page}
          </span>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className={`px-3 py-1 rounded text-sm font-medium transition
            ${theme === "dark"
              ? "bg-gray-700 cursor-pointer hover:bg-gray-600"
              : "bg-gray-300 cursor-pointer hover:bg-gray-400"}`}
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
