import React, { useEffect, useMemo, useState } from "react";
import { Search, ChevronRight, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { orderHistory } from "../Data";
const TrackOrder = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "In Transit":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "Processing":
        return "bg-amber-50 text-amber-600 border-amber-100";
      case "Cancelled":
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-violet-50 text-violet-600 border-violet-100";
    }
  };

  // LOGIC: Filter orders in real-time based on ID
  const filteredOrders = useMemo(() => {
    return orderHistory.filter((order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header & Search (Same as before) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-none">
              Order <span className="text-red-600">History</span>
            </h1>
            <p className="text-orange-400 mt-3 font-medium uppercase text-[10px] tracking-[0.3em]">
              {filteredOrders.length} Orders Found
            </p>
          </div>

          <div className="relative group">
            <input
              type="text"
              placeholder="Search Order ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 bg-white border border-orange-200 rounded-full py-3 px-6 pl-12 text-sm font-bold focus:ring-4 focus:ring-red-50/50 transition-all outline-none"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 group-focus-within:text-red-600 transition-colors"
              size={18}
            />
          </div>
        </div>

        {/* Orders Feed */}
        <div className="space-y-4 overflow-auto h-[480px]">
          <AnimatePresence mode="popLayout">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  layout // Logic: Smoothly animates the position changes when others disappear
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-orange-100 rounded-[2rem] p-6 flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  {/* ... (Existing Card Content from previous step) */}
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-400 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                      <Box size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-orange-900 text-lg uppercase italic tracking-tighter">
                        #{order.id}
                      </h3>
                      <p className="text-[11px] font-bold text-orange-400 uppercase">
                        {order.date} • {order.itemsQty} Items
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-8 mt-4 md:mt-0">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusStyle(order.status)}`}
                    >
                      {order.status}
                    </span>
                    <button
                      onClick={() => {
                        navigate(`/OrderDetails/${order.id}`, {
                          state: { orderData: order },
                        });
                    
                      }}
                      className="p-2 bg-orange-50 rounded-full text-orange-300 group-hover:bg-red-600 group-hover:text-white transition-all"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              /* --- EMPTY SEARCH STATE --- */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-orange-200"
              >
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-orange-300" />
                </div>
                <h3 className="font-black uppercase tracking-widest text-orange-900">
                  No Orders Found
                </h3>
                <p className="text-orange-400 text-xs mt-2 font-medium">
                  We couldn't find an order matching "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className=" w-full md:w-64 bg-white border border-orange-500 rounded-full mt-6 text-red-600 font-black text-[20px] uppercase tracking-widest "
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
