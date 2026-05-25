import React, { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiChevronLeft,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] p-4 relative overflow-hidden">
      {/* Dynamic Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[120px]" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative z-10">
        {/* Left Side: Editorial Image */}
        <div className="hidden lg:block relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={isLogin ? "login" : "signup"}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8 }}
              src={
                isLogin
                  ? "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  : "https://plus.unsplash.com/premium_photo-1664202526047-405824c633e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-tr from-red-900/60 to-transparent" />

          <div className="absolute bottom-12 left-12 right-12 text-white">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                Join the Movement
              </span>
              <h3 className="text-4xl font-black mt-4 leading-tight uppercase italic">
                The Future of <br />
                Style is Here.
              </h3>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Colorful Auth Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center relative bg-white">
          <button
            onClick={() => navigate("/")}
            className="absolute top-8 left-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:text-red-600 transition-colors"
          >
            <HiChevronLeft size={18} /> Store
          </button>

          <div className="max-w-sm mx-auto w-full">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-5xl font-black text-orange-900 tracking-tighter">
                {isLogin ? "Login" : "SIGN UP"}
              </h2>
              <div className="h-1 w-12 bg-red-600 mt-2 rounded-full mx-auto lg:mx-0" />
            </div>

            <form className="space-y-4">
              {!isLogin && (
                <div className="group relative">
                  <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 group-focus-within:text-red-600 transition-colors" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-orange-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none"
                  />
                </div>
              )}

              <div className="group relative">
                <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 group-focus-within:text-red-600 transition-colors" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-4 bg-orange-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none"
                />
              </div>

              <div className="group relative">
                <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400 group-focus-within:text-red-600 transition-colors" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-4 bg-orange-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none"
                />
              </div>

              <button onClick={() => navigate("/")} className="w-full bg-gradient-to-r from-red-600 to-fuchsia-600 text-white py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-red-200 transition-all transform hover:-translate-y-1 mt-6">
                {isLogin ? "LOG IN" : "CREATE ACCOUNT"}
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-orange-500">
              {isLogin ? "New to LAVA STORE?" : "Already part of LAVA family?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 font-black text-red-600 hover:text-fuchsia-600 transition-colors underline decoration-2 underline-offset-4"
              >
                {isLogin ? "Create Account" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
