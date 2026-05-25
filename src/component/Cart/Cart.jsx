import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) {
  // Calculate total price,
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-orange-100 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-600" />
            <h2 className="text-xl font-bold text-orange-900">Your Cart</h2>
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-orange-400" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[calc(100vh-250px)]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-10 h-10 text-orange-300" />
              </div>
              <p className="text-orange-500 font-medium">Your cart is empty</p>
              <NavLink
                to={"/shop"}
                onClick={onClose}
                className="mt-4 text-red-600 font-bold hover:underline"
              >
                Start Shopping
              </NavLink>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${!item.selectedSize || 'no-size'}`} className="flex gap-4">
                <div className="w-20 h-24 bg-orange-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="font-bold text-orange-900 text-sm">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => onRemove(item.id, item.selectedSize)}
                        className="text-orange-400 hover:text-rose-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-orange-500">{item.category}</p>
                    <p className="font-black text-red-700">
                      {item.selectedSize ? `$` + item.selectedSize : ""}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-orange-200 rounded-lg">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, -1, item.selectedSize)
                        }
                        className="p-1 hover:bg-orange-50 text-orange-500"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 text-sm font-bold text-orange-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, 1, item.selectedSize)
                        }
                        className="p-1 hover:bg-orange-50 text-orange-500"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-black text-orange-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-orange-100 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-orange-500 font-medium">Subtotal</span>
              <span className="text-2xl font-black text-orange-900">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => {
                onClose();
                navigate("/checkout"); // Go to checkout
              }}
              className="w-full bg-black text-white py-4 rounded-xl font-bold"
            >
              Checkout Now
            </button>
            <p className="text-center text-xs text-orange-400 mt-4">
              Shipping and taxes calculated at checkout
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
