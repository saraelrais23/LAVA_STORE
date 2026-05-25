import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "New Arrivals", href: "/new" },
    { name: "Best Sellers", href: "/top" },
    { name: "Sale", href: "/sale", highlight: true },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = false;
  return (
    <header className="w-full bg-white/90 border-b border-orange-100 backdrop-blur-sm  top-20 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center h-14 py-1">
          {/* --- MOBILE MENU BUTTON --- */}
          {/* Hidden on desktop, takes up space on mobile to allow triggering the menu */}
          <div className="flex md:hidden w-full justify-between items-center">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -mr-2 rounded-xl text-orange-600 hover:bg-orange-50 hover:text-red-600 transition-all active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          {/* Unchanged centered layout, hidden entirely on small screens */}
          <div className="hidden md:flex items-center justify-center gap-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) => `
                text-[13px] font-bold uppercase tracking-wider transition-all relative group py-2 flex-shrink-0
                ${
                  link.highlight
                    ? "text-rose-600 hover:text-rose-700"
                    : isActive
                      ? "text-red-600"
                      : "text-orange-500 hover:text-red-600"
                }
              `}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    link.highlight ? "bg-rose-600" : "bg-red-600"
                  } ${isActive ? "w-full" : "w-0"}`}
                />
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN PANEL --- */}
      {/* Slides down smoothly when the menu state is true */}
      <div
        className={`md:hidden border-t border-orange-50 bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 py-3"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)} // Closes menu automatically upon clicking a route
              className={({ isActive }) => `
              block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all
              ${
                link.highlight
                  ? "text-rose-600 bg-rose-50/50 hover:bg-rose-50"
                  : isActive
                    ? "text-red-600 bg-red-50/50"
                    : "text-orange-600 hover:bg-orange-50 hover:text-red-600"
              }
            `}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
