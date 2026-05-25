import React from "react";
import { Data } from "../Data";
import ProductDetails from "../ProductDetails/ProductDetails";
export default function BestSellers({
  product,
  onAddToCart,
  onAddToFav,
  isFavourite,
}) {
  // Logic: Filter items with high rating or a 'bestSeller' tag
  const topProducts = Data.filter(
    (item) => item.rating >= 4.5 || item.bestSeller,
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter">
          BEST SELLERS
        </h1>
        <p className="text-orange-500 mt-2">
          Community favorites that never go out of style.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topProducts.map((product) => (
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
