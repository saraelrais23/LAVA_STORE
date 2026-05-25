import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const Toast = ({ isVisible, message, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed top-8 left-0 -translate-x-1/2 z-[1000] min-w-[300px]"
        >
          <div className="bg-red-700 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center justify-between gap-4 border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-400 w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">
                {message}
              </span>
            </div>
            
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={16} className="text-orange-400" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;