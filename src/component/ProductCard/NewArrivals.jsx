import React from "react";
import { Data } from "../Data"; // Your product JSON
import ProductDetails from "../ProductDetails/ProductDetails";

const NewArrivals = ({ product, onAddToCart, onAddToFav, isFavourite }) => {
  // Logic: Filter items added in the last 30 days or marked as 'new'
  const newProducts = Data.filter((item) => item.isNew === true);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter">
          NEW ARRIVALS
        </h1>
        <p className="text-orange-500 mt-2">
          The latest drops from LAVA STORE.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newProducts.map((product) => (
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
};

export default NewArrivals;
