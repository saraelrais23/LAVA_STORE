import React, { useState, useEffect } from "react"; // Added useEffect
import { useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";

function SingleProduct({ onAddToCart }) {
  // const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;
  const [selectedSize, setSelectedSize] = useState("M");

  // Fix: Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="py-20 text-center flex flex-col items-center gap-4">
        <p className="text-orange-500">Product not found or page refreshed.</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-red-600 text-white px-6 py-2 rounded-lg"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  // Fallback sizes if the product object doesn't have them
  const availableSizes = product.sizes || ["S", "M", "L", "XL"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button
        onClick={() => navigate(-1)} // Modern way to go back
        className="flex items-center gap-2 text-orange-500 hover:text-black mb-8 transition-colors group"
      >
        <IoChevronBackOutline className="group-hover:-translate-x-1 transition-transform" />
        Back to Gallery
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Image */}
        <div className="bg-orange-100 rounded-3xl overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest">
              {product.category}
            </span>
            <h1 className="text-4xl font-black text-orange-900 mt-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <p className="text-3xl font-bold text-orange-800">
                ${product.price}
              </p>
              {product.discount && (
                <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-bold">
                  {product.discount}% OFF
                </span>
              )}
            </div>
          </div>

          <p className="text-orange-600 leading-relaxed">
            {product.description ||
              "Experience premium quality and unmatched style with the " +
                product.name +
                ". Perfectly crafted for your daily vibe."}
          </p>

          {/* Size Selector */}
          {product.category !== "Eyewear" &&
          product.category !== "Accessories" ? (
            <div>
              <h4 className="font-bold mb-3 text-orange-900">Select Size</h4>
              <div className="flex gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl font-bold transition-all border-2 ${
                      selectedSize === size
                        ? "border-red-600 bg-red-50 text-red-600"
                        : "border-orange-200 text-orange-400 hover:border-orange-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onAddToCart({ ...product, selectedSize })} // Passing size to cart
              className="flex-1 bg-orange-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all shadow-xl active:scale-95"
            >
              <AiOutlineShoppingCart className="text-xl" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
