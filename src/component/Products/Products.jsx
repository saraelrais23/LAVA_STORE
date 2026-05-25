import React, { useEffect, useState } from "react"; // Added useState
import ProductDetails from "../ProductDetails/ProductDetails";
import { NavLink, useLocation } from "react-router-dom"; // Added useLocation
import { Data } from "../Data";

function Products({ onAddToCart, onAddToFav, isFavourite }) {
  const location = useLocation(); // Use this instead of window.location
  const productsData = Data;

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category"); // Looks specifically for ?category=...
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [location.search]);
 
  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  const isShopPage = location.pathname === "/shop";
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-black text-orange-900 tracking-tight">
            Featured Products
          </h2>
          <p className="text-orange-500 mt-2">
            Our latest drops, designed for the modern world.
          </p>
        </div>
        {!isShopPage && (
          <NavLink
            to="/shop"
            className="text-sm font-bold text-red-600 hover:text-red-700 border-b-2 border-red-100 pb-1"
          >
            View All Products
          </NavLink>
        )}
      </div>

      {!isShopPage ? (
        // HOME VIEW: Show standard grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.slice(2, 8).map((item) => (
            <ProductDetails
              key={item.id}
              product={item}
              onAddToCart={onAddToCart}
              onAddToFav={onAddToFav}
              isFavourite={isFavourite.some((fav) => fav.id === item.id)}
            />
          ))}
        </div>
      ) : (
        // SHOP VIEW: Show Filter + Filtered Grid
        <>
          <div className="flex items-center gap-2 overflow-x-auto pb-6 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-orange-100 text-orange-600 hover:bg-orange-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductDetails
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onAddToFav={onAddToFav}
                isFavourite={isFavourite.some((fav) => fav.id === product.id)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-orange-400">
              No products found.
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Products;
