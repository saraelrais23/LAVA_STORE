import React, { useEffect } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProductDetails = ({ product, onAddToCart, onAddToFav, isFavourite }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const nav = useNavigate();
  if (!product) {
    return <div className="animate-pulse bg-orange-100 rounded-3xl h-64"></div>;
  }
  // Destructuring product data
  const { name, price, category, image, rating, discount } = product;
  return (
    <div className="group relative bg-white rounded-3xl p-3 border border-transparent hover:border-orange-100 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-orange-100">
        <Link to={`/product/${product.id}`} state={{ product }}>
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-orange-100 cursor-pointer">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Image code... */}
          </div>
        </Link>
        {/* Wishlist Button */}
        <button
          onClick={() => onAddToFav(product)} // Pass the product back to App.js
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-orange-400 hover:text-rose-500 hover:bg-white transition-all shadow-sm"
        >
          <Heart
            className={`w-5 h-5 ${isFavourite ? "fill-rose-500 text-rose-500" : "text-orange-400"}`}
          />
        </button>

        {/* Discount Badge */}

        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              NEW
            </span>
          )}
          {discount && (
            <span className="bg-rose-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              -{product.discount}%
            </span>
          )}
        </div>
        {/* Quick Add to Cart (Desktop Hover) */}
        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => {
              if (
                product.category === "Eyewear" ||
                product.category === "Accessories"
              ) {
                onAddToCart(product);
              } else {
                nav(`/product/${product.id}`,
                  {
                    state: { product: product }
                  });
                // Sends them to the actual product page
              }
            }}
            className="w-full bg-orange-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 shadow-lg transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            {product.category === "Eyewear" ||
            product.category === "Accessories"
              ? "Add to Cart"
              : "Select Size"}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-4 px-2 pb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">
            {category}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-orange-600">{rating}</span>
          </div>
        </div>

        <h3 className="text-orange-900 font-bold truncate mb-2 group-hover:text-red-600 transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg font-black text-orange-900">${price}</span>
          {discount && (
            <span className="text-sm text-orange-400 line-through font-medium">
              ${(price / (1 - discount / 100)).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
