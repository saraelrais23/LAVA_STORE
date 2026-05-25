import React, { useState } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Search,
  User,
  Heart,
  Truck,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Data } from "../Data";
const Navbar = ({
  cartCount = 0,
  favoriteCount = 0,
  onOpenCart,
  onOpenFav,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation().pathname === "/login";
  const navigate = useNavigate();
  //------------------Search logic--------------------
  // 1. Master State for Search & Categories
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-orange-100/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0 cursor-pointer group">
          <NavLink
            to="/"
            className="bg-red-600 p-2 rounded-xl transition-all duration-300 group-hover:rotate-12"
          >
            <ShoppingBag className="w-5 h-5 text-white" />
          </NavLink>
          <NavLink
            to="/"
            className="text-xl font-black tracking-tighter text-orange-900 hidden sm:block"
          >
            LAVA<span className="text-red-600">STORE</span>
          </NavLink>
        </div>

        {/* Search Input - Fully Responsive & Centered */}
        {!location && (
          <div className="relative flex-1 max-w-md mx-auto z-50">
            {/* Desktop/Tablet View: Displays full input box */}
            <div className="hidden md:flex relative items-center transition-all duration-300 w-full">
              <Search
                className={`absolute left-4 w-4 h-4 transition-colors ${isSearchFocused || searchQuery ? "text-red-500" : "text-orange-400"}`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items, brands, or styles..."
                onFocus={() => setIsSearchFocused(true)}
                // Keep a slight delay on blur so clicks on the dropdown list register before it closes
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className={`w-full bg-orange-50 border rounded-xl py-2.5 pl-11 pr-10 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-red-500/10 ${
                  isSearchFocused || searchQuery
                    ? "border-red-400 bg-white shadow-sm"
                    : "border-orange-200"
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-xs font-bold text-orange-400 hover:text-orange-900"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile View: Truncated text input box that scales down gracefully */}
            <div className="flex md:hidden relative items-center flex-1 max-w-[180px] sm:max-w-xs">
              <Search
                className={`absolute left-3 w-4 h-4 ${searchQuery ? "text-red-500" : "text-orange-400"}`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full bg-orange-50 border border-orange-200 rounded-xl py-2 pl-9 pr-8 text-sm focus:outline-none focus:border-red-400 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-[10px] font-bold text-orange-400 hover:text-orange-900"
                >
                  ✕
                </button>
              )}
            </div>

            {/* --- SHARED AUTOCOMPLETE DROPDOWN MENU --- */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-orange-100 rounded-2xl shadow-xl max-h-60 overflow-y-auto overflow-x-hidden divide-y divide-orange-50 animate-in fade-in slide-in-from-top-1 duration-150">
                {(() => {
                  // Filter matching items dynamically based on character matching
                  const suggestions = Data.filter(
                    (product) =>
                      product.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                      product.category
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
                  );

                  if (suggestions.length === 0) {
                    return (
                      <div className="p-4 text-xs font-bold text-orange-400 uppercase tracking-wider text-center">
                        No matches found
                      </div>
                    );
                  }

                  return suggestions.map((product) => (
                    <button
                      onClick={() =>
                        navigate(`/shop?category=${product.category}`)
                      }
                      key={product.id}
                      type="button"
                      onMouseDown={() => {
                        setSearchQuery(product.name);
                        
                      }}
                      className="w-full text-left px-5 py-3.5 hover:bg-red-50/50 flex items-center justify-between transition-colors group"
                    >
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-orange-900 group-hover:text-red-600 transition-colors">
                          {product.name}
                        </span>
                        <span className="text-[10px] font-black tracking-widest text-orange-400 uppercase mt-0.5">
                          In {product.category}
                        </span>
                      </div>
                      <span className="text-xs font-black italic text-orange-400 group-hover:text-orange-900">
                        ${product.price.toFixed(2)}
                      </span>
                    </button>
                  ));
                })()}
              </div>
            )}
          </div>
        )}

        {/* User Actions - Scales down naturally */}
        <div className="flex items-center gap-0.5 sm:gap-2 md:gap-3 flex-shrink-0">
          {/* Track Order - Text hidden on small screens */}
          <button
            onClick={() => navigate("/TrackOrder")}
            className="p-2 text-orange-600 hover:text-red-600 transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-orange-50"
          >
            <Truck size={18} />
            <span className="hidden lg:inline">Track Order</span>
          </button>

          {/* Favorites */}
          <button
            onClick={onOpenFav}
            className="relative p-2.5 text-orange-400 hover:text-rose-500 hover:bg-rose-50/60 rounded-xl transition-all"
          >
            <Heart
              className={`w-5 h-5 ${favoriteCount > 0 ? "fill-rose-500 text-rose-500" : "text-orange-500"}`}
            />
            {favoriteCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white"></span>
            )}
          </button>

          {/* Cart */}
          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 rounded-xl bg-orange-900 px-3 sm:px-4 py-2 text-white transition-all hover:bg-red-600 active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-xs sm:text-sm font-bold">{cartCount}</span>
          </button>

          {/* Decorative Divider */}
          <span className="h-5 w-px bg-orange-200 hidden xs:block mx-0.5 sm:mx-1"></span>

          {/* Profile */}
          <NavLink
            to="/login"
            className="p-2.5 text-orange-500 hover:text-red-600 hover:bg-orange-50 rounded-xl transition-all"
          >
            <User className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
