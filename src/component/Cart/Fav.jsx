import React from "react";
import { X, Trash2, Heart } from "lucide-react";

export default function Fav({ isOpen, onClose, FavItems, onRemove }) {
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
            <Heart
              className={"w-5 h-5 fill-rose-500 text-rose-500"}
            />

            <h2 className="text-xl font-bold text-orange-900">Your favourite</h2>
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded-full">
              {FavItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orange-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-orange-400" />
          </button>
        </div>

        {/* Fav Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[calc(100vh-250px)]">
          {FavItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-orange-300" />
              </div>
              <p className="text-orange-500 font-medium">Your Fav is empty</p>
              <button
                onClick={onClose}
                className="mt-4 text-red-600 font-bold hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            FavItems.map((item) => (
              <div key={item.id} className="flex gap-4">
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
                        onClick={() => onRemove(item.id)}
                        className="text-orange-400 hover:text-rose-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-orange-500">{item.category}</p>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <p className="font-black text-orange-900">${item.price}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
