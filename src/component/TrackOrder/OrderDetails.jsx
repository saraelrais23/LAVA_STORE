import React from "react";
import {
  Package,
  CheckCircle,
  Clock,
  Truck,
  MapPin,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderData;

  const currentStep = orderDetails?.currentStep || 0;
  const statusSteps = [
    { label: "Confirmed", icon: CheckCircle },
    { label: "Processing", icon: Clock },
    { label: "In Transit", icon: Truck },
    { label: "Delivered", icon: Package },
  ];

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50 px-4">
        <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-orange-100 max-w-md">
          <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} />
          </div>
          <h2 className="text-2xl font-bold text-orange-900 mb-2">
            No Order Found
          </h2>
          <p className="text-orange-500 mb-8">
            It looks like you haven't placed an order recently or the session
            expired.
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="w-full bg-orange-900 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-lg"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] py-12 px-4 md:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">
              Successfully Placed
            </span>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase text-orange-900 mt-1">
              Track Your order
            </h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-orange-100 flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-orange-600">
              Order ID: #{orderDetails.id}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tracking & Items Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-orange-100"
            >
              <h3 className="text-lg font-bold mb-10 flex items-center gap-2">
                <Truck size={20} className="text-red-600" />
                Shipping Status
              </h3>

              <div className="relative flex justify-between">
                {/* Progress Lines */}
                <div className="absolute top-5 left-0 w-full h-[2px] bg-orange-100" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(currentStep / (statusSteps.length - 1)) * 100}%`,
                  }}
                  className="absolute top-5 left-0 h-[2px] bg-red-600 z-0 transition-all duration-1000"
                />

                {statusSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index <= currentStep;
                  const isCurrent = index === currentStep;

                  return (
                    <div
                      key={step.label}
                      className="relative z-10 flex flex-col items-center"
                    >
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center border-4 border-white transition-all duration-500 shadow-md ${
                          isActive
                            ? "bg-red-600 text-white"
                            : "bg-orange-100 text-orange-400"
                        } ${isCurrent ? "ring-4 ring-red-100" : ""}`}
                      >
                        <Icon size={18} />
                      </div>
                      <p
                        className={`text-[10px] font-bold uppercase mt-4 tracking-tighter ${isActive ? "text-red-600" : "text-orange-400"}`}
                      >
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Delivery Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm flex items-start gap-4"
              >
                <div className="bg-red-50 p-3 rounded-2xl text-red-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                    Shipping Address
                  </p>
                  <p className="font-bold text-orange-900">
                    {orderDetails.fullName}
                  </p>
                  <p className="text-sm text-orange-500 leading-relaxed">
                    {orderDetails.address}, {orderDetails.city}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm flex items-start gap-4"
              >
                <div className="bg-green-50 p-3 rounded-2xl text-green-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-1">
                    Expected Arrival
                  </p>
                  <p className="font-bold text-orange-900">
                    {orderDetails.ExpectedDate || "May 18, 2026"}
                  </p>
                  <p className="text-sm text-orange-500">Standard Delivery</p>
                </div>
              </motion.div>
            </div>

            {/* Item Details Manifest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-orange-100"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Package size={20} className="text-red-600" />
                Items Manifest
              </h3>

              <div className="divide-y divide-orange-100">
                {orderDetails.items &&
                Array.isArray(orderDetails.items) &&
                orderDetails.items.length > 0 ? (
                  orderDetails.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-5 py-5 first:pt-0 last:pb-0"
                    >
                      {/* Item Image Placeholder Box */}
                      <div className="w-16 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-400 border border-orange-100">
                        <img
                          alt={item.itemName}
                          src={item.itemImage}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Dynamic Meta Text */}
                      <div className="flex-1">
                        <h4 className="font-black text-orange-900 text-sm uppercase tracking-tight">
                          {item.itemName}
                        </h4>
                        <p className="text-[11px] font-bold text-orange-400 uppercase mt-0.5">
                          Qty: {item.itemCount}
                        </p>
                      </div>

                      {/* Individual Item Pricing */}
                      <div className="text-right">
                        <span className="font-black text-orange-900 text-base italic">
                          ${Number(item.itemPrice).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  /* Fallback condition if order items are empty or structurally missing */
                  <p className="text-orange-400 text-xs py-4">
                    No item information detailed.
                  </p>
                )}
              </div>

              {/* Cost Summary Ledger Footer */}
              {orderDetails.total && (
                <div className="mt-6 pt-6 border-t border-orange-100 space-y-2">
                  <div className="flex justify-between text-xs text-orange-400 font-bold uppercase tracking-wider">
                    <span>Subtotal</span>
                    <span className="text-orange-900">
                      ${orderDetails.total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-orange-400 font-bold uppercase tracking-wider">
                    <span>VAT / Logistics</span>
                    <span className="text-orange-900">
                      ${(orderDetails.total * 0.12).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs font-black text-red-600 uppercase tracking-widest">
                      Settled Total
                    </span>
                    <span className="text-xl font-black italic tracking-tighter text-orange-900">
                      $
                      {Number(
                        orderDetails.total + orderDetails.total * 0.12,
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column: Mini Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-red-900 rounded-[2.5rem] p-8 text-white sticky top-[5.5rem] overflow-hidden relative">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-[#bd8879] to-[#5c3228] text-orange-200/80 rounded-full blur-3xl opacity-20" />
              <h3 className="text-xl font-bold mb-6">Order Info</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-orange-400">Status</span>
                  <span
                    className={
                      orderDetails.status === "Cancelled"
                        ? "bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                        : "bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    }
                  >
                    {orderDetails.status}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-400">Payment Status</span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      orderDetails?.payment?.includes("Visa") ||
                      orderDetails?.status === "Delivered"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {orderDetails.status === "Cancelled"
                      ? "--"
                      : orderDetails.payment?.includes("Visa") ||
                          orderDetails.status === "Delivered"
                        ? "Paid"
                        : "unPaid"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-orange-400">Payment</span>
                  <span className="font-medium px-3">
                    {orderDetails.status === "Cancelled"
                      ? "--"
                      : orderDetails.payment}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 max-w-xs mx-auto">
                <button
                  onClick={() => navigate("/shop")}
                  className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-2"
                >
                  Back to Shop
                </button>
                <button
                  onClick={() => navigate("/TrackOrder")}
                  className="w-full bg-red-600 hover:bg-red-500 text-white py-4 rounded-2xl font-bold transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-2"
                >
                  Track Another Order
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
