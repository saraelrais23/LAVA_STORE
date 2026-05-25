import React, { useState } from "react";
import {
  IoBagCheckOutline,
  IoArrowBackOutline,
  IoCardOutline,
  IoCashOutline,
  IoPersonOutline,
  IoMailOutline,
  IoLocationOutline,
  IoBusinessOutline,
  IoCallOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";

// Reusable Floating Label Input Component
const InputField = ({
  label,
  icon: Icon,
  name,
  type = "text",
  value,
  onChange,
  required,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mt-4">
      {/* Icon */}
      <div
        className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${isFocused ? "text-red-600" : "text-orange-400"}`}
      >
        <Icon size={20} />
      </div>

      {/* Input */}
      <input
        required={required}
        name={name}
        type={type}
        value={value}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        placeholder=" " // Required for the peer-placeholder-shown trick
        className="block w-full px-12 py-4 text-sm text-orange-900 bg-transparent border-2 border-orange-200 rounded-2xl appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer transition-all"
      />

      {/* Floating Label (Acts as placeholder) */}
      <label
        className={`absolute text-lg duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-10 pointer-events-none ${isFocused || value ? "text-red-600" : "text-orange-500"}`}
      >
        {label}
      </label>
    </div>
  );
};

const Checkout = ({ cartItems, totalAmount, onClearCart }) => {
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleInput = (e) => {
    let { name, value } = e.target;

    // 1. Phone Validation (Max 11 digits, numbers only)
    if (name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 11);
    }

    // 2. Card Number Validation (Max 16 digits, numbers only)
    if (name === "cardNumber") {
      // value = value.replace(/\D/g, "").slice(0, 16);
      let digits = value.replace(/\D/g, "");

      // 2. Limit to 16 digits total
      digits = digits.slice(0, 16);

      // 3. Add a hyphen every 4 digits using Regex
      // This looks for groups of 4 digits and adds a '-' after them
      value = digits.match(/.{1,4}/g)?.join("-") || digits;
    }

    // 3. Expiry Date Validation (MM/YY)
    if (name === "expiry") {
      // Remove all non-digits
      let clearValue = value.replace(/\D/g, "");

      if (clearValue.length >= 3) {
        // Format as MM/YY
        value = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
      } else {
        value = clearValue;
      }

      // Limit to 5 characters (MM/YY)
      value = value.slice(0, 5);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    onClearCart();
  };

  if (isOrdered) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
          ✓
        </div>
        <h2 className="text-4xl font-black text-orange-900">Order Confirmed!</h2>
        <p className="text-orange-500 mt-4 mb-8">
          Your package from LAVA STORE is being prepared.
        </p>
        <div className="flex flex-col items-center gap-4 max-w-xs mx-auto">
          <button
            onClick={() => navigate("/shop")}
            className="w-full bg-orange-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-lg"
          >
            Back to Shopping
          </button>

          <button
            onClick={() => navigate("/TrackOrder")}
            className="w-full bg-white text-orange-900 border-2 border-orange-900 px-8 py-4 rounded-2xl font-bold hover:bg-red-500  transition-all"
          >
            Track Your Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-10">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-orange-100 rounded-full transition-all"
        >
          <IoArrowBackOutline size={24} />
        </button>
        <h1 className="text-3xl font-black">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="space-y-10">
          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-orange-900 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">
                1
              </span>
              Shipping Information
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <InputField
                label="Full Name"
                name="fullName"
                icon={IoPersonOutline}
                value={formData.fullName}
                onChange={handleInput}
                required
              />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                icon={IoMailOutline}
                value={formData.email}
                onChange={handleInput}
                required
              />
              <InputField
                label="Street Address"
                name="address"
                icon={IoLocationOutline}
                value={formData.address}
                onChange={handleInput}
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="City"
                  name="city"
                  icon={IoBusinessOutline}
                  value={formData.city}
                  onChange={handleInput}
                  required
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  icon={IoCallOutline}
                  value={formData.phone}
                  onChange={handleInput}
                  required
                  maxLength="11"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="bg-orange-900 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs">
                2
              </span>
              Payment Method
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod("cash")}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${paymentMethod === "cash" ? "border-red-600 bg-red-50 text-red-600" : "border-orange-100 bg-orange-50 text-orange-500"}`}
              >
                <IoCashOutline size={28} className="mb-2" />
                <span className="font-bold text-sm">Cash on Delivery</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("visa")}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${paymentMethod === "visa" ? "border-red-600 bg-red-50 text-red-600" : "border-orange-100 bg-orange-50 text-orange-500"}`}
              >
                <IoCardOutline size={28} className="mb-2" />
                <span className="font-bold text-sm">Visa / Card</span>
              </button>
            </div>

            {paymentMethod === "visa" && (
              <div className="space-y-2 p-6 bg-orange-50 rounded-3xl border border-orange-200 animate-in fade-in zoom-in-95 duration-300">
                <InputField
                  label="Card Number"
                  name="cardNumber"
                  icon={IoCardOutline}
                  value={formData.cardNumber}
                  onChange={handleInput}
                  required
                  maxLength="19"
                />
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="MM/YY"
                    name="expiry"
                    icon={IoCalendarOutline}
                    value={formData.expiry}
                    onChange={handleInput}
                    required
                    maxLength="5"
                  />
                  <InputField
                    label="CVV"
                    name="cvv"
                    type="password"
                    icon={Lock}
                    value={formData.cvv}
                    onChange={handleInput}
                    required
                    maxLength="3"
                  />
                </div>
              </div>
            )}
          </section>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-100 hover:bg-red-700 transition-all flex items-center justify-center gap-3"
          >
            <IoBagCheckOutline size={24} />{" "}
            {paymentMethod === "cash"
              ? "Confirm Order"
              : `Pay $${totalAmount.toFixed(2)}`}
          </button>
        </form>

        {/* Order Summary remain the same as your original */}
        <div className="bg-red-100 p-8 rounded-3xl h-fit lg:sticky lg:top-10">
          <h3 className="text-xl font-bold mb-6">Order Summary</h3>
          <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.selectedSize}`}
                className="flex justify-between items-center bg-white p-3 rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl overflow-hidden border border-orange-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-orange-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-orange-500">
                      Size: {item.selectedSize} × {item.quantity}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-sm text-red-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t border-orange-200 pt-6 space-y-3 font-bold">
            <div className="flex justify-between text-orange-500">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-black text-orange-900 pt-3 border-t border-dashed">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
