import React from "react";
import { Data } from "../Data";
import ProductDetails from "../ProductDetails/ProductDetails";
export default function SalePage({
  product,
  onAddToCart,
  onAddToFav,
  isFavourite,
}) {
  // Logic: Only items with a discount or 'onSale' flag
  const saleProducts = Data.filter(
    (item) => item.oldPrice > item.price || item.discount,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter text-rose-600">
          SEASONAL SALE
        </h1>
        <p className="text-orange-500 mt-2">
          Premium pieces at entry-level prices.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {saleProducts.map((product) => (
          <ProductDetails
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onAddToFav={onAddToFav}
            isFavourite={isFavourite.some((fav) => fav.id === product.id)}
          />
        ))}
      </div>
    </div>
  );
}
