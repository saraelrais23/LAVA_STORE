import React, { useEffect, useState } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Hero from "./component/HeroSection/Hero";
import NavBar from "./component/NavBar/NavBar";
import Products from "./component/Products/Products";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Cart from "./component/Cart/Cart";
import Fav from "./component/Cart/Fav";
import SingleProduct from "./component/ProductDetails/SingleProduct";
import Checkout from "./component/Checkout/Checkout";
import Lookbook from "./component/lookbook/LookBook";
import Login from "./component/Login/Login";
import Categories from "./component/Categories/Categories";
import NewArrivals from "./component/ProductCard/NewArrivals";
import BestSellers from "./component/ProductCard/BestSellers";
import SalePage from "./component/ProductCard/SalePage";
import Toast from "./component/Toast";
import TrackOrder from './component/TrackOrder/TrackOrder';
import OrderDetails from "./component/TrackOrder/OrderDetails";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  // adding data to localstorage
  const [cartItems, setCartItems] = useState(() => {
    const saveData = localStorage.getItem("cart");
    return saveData ? JSON.parse(saveData) : [];
  });
  const [favItems, setFavItems] = useState(() => {
    const saveData = localStorage.getItem("fav");
    return saveData ? JSON.parse(saveData) : [];
  });
  const [isFavOpen, setIsFavOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" }); //Notification
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const handleClearCart = () => {
    setCartItems([]);
  };
  const handleAddToCart = (product, size) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize,
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, quantity: item.quantity + 1, size: size }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically open drawer when adding
    setIsFavOpen(false);
  };

  const handleUpdateQuantity = (id, amount, size) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id && item.selectedSize === size) {
          const newQty = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQty };
        }
        return item;
      }),
    );
  };

  const handleRemove = (id, selectedSize) => {
    setCartItems((prev) =>
      prev.filter((item) => {
        // Logic: Keep the item if:
        // 1. The ID is different
        // OR
        // 2. The ID is the same, but the Size is different
        return item.id !== id || item.selectedSize !== selectedSize;
      }),
    );
  };

  const handleAddToFav = (product) => {
    // 1. Check if the product is already in the favorites array
    const isAlreadyExist = favItems.some((item) => item.id === product.id);
    if (isAlreadyExist) {
      // 2. If it exists, notify the user and stop the function
      return (
        handleFavRemove(product.id),
        showNotification(`${product.name} Removed from Favourite!`)
      );
    }
    // 3. If it doesn't exist, add it to the state
    setFavItems((prev) => [...prev, product]);
    showNotification(`${product.name} Added from Favourite!`)
    // 4. UI Feedback: Open Fav drawer, close Cart drawer
    setIsFavOpen(true);
    setIsCartOpen(false);
  };
  const handleFavRemove = (id) => {
    setFavItems((prev) => prev.filter((item) => item.id !== id));
  };
  //Notify
  const showNotification = (message, type = "success") => {
    setToast({ show: true, message, type });

    // Auto-hide logic: Clear the toast after 3 seconds
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };
  // sync data when changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favItems));
  }, [favItems]);
  const location = useLocation().pathname == "/login";
  return (
    <div className="relative min-h-screen bg-white">
      {/* Persistent Components (Visible on all pages) */}
      <NavBar
        cartCount={cartItems.length}
        onOpenCart={() => setIsCartOpen(true)}
        favoriteCount={favItems.length}
        onOpenFav={() => setIsFavOpen(true)}
      />
      {!location && <Header />}

      {/* Toast Component */}
      <Toast
        isVisible={toast.show}
        message={toast.message}
        onClose={() => setToast({ ...toast, show: false })}
      />

      {/* Dynamic Content */}
      <Routes>
        {/* Home Route */}
        <Route
          index
          element={
            <>
              <Hero />
              <Products
                onAddToCart={handleAddToCart}
                onAddToFav={handleAddToFav}
                isFavourite={favItems}
              />
            </>
          }
        />

        {/* Shop Route (You can create a separate Shop component later) */}
        <Route
          path="/shop"
          element={
            <Products
              onAddToCart={handleAddToCart}
              onAddToFav={handleAddToFav}
              isFavourite={favItems}
            />
          }
        />

        <Route
          path="/product/:productId"
          element={<SingleProduct onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              totalAmount={totalAmount}
              onClearCart={handleClearCart}
            />
          }
        />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/new"
          element={
            <NewArrivals
              onAddToCart={handleAddToCart}
              onAddToFav={handleAddToFav}
              isFavourite={favItems}
            />
          }
        />
        <Route
          path="/top"
          element={
            <BestSellers
              onAddToCart={handleAddToCart}
              onAddToFav={handleAddToFav}
              isFavourite={favItems}
            />
          }
        />
        <Route
          path="/sale"
          element={
            <SalePage
              onAddToCart={handleAddToCart}
              onAddToFav={handleAddToFav}
              isFavourite={favItems}
            />
          }
        />
        <Route path="/TrackOrder" element={<TrackOrder />} />
        <Route path="/orderdetails/:orderid" element={<OrderDetails />} />
      </Routes>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
      />
      <Fav
        isOpen={isFavOpen}
        onClose={() => setIsFavOpen(false)}
        FavItems={favItems}
        onRemove={handleFavRemove}
      />
     
      <Footer />
    </div>
  );
}

export default App;
