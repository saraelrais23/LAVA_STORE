import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { collections } from "../Data";

const Lookbook = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-orange-900">
        <img
          src="https://images.unsplash.com/photo-1580793241553-e9f1cce181af?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          alt="Banner"
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 font-bold tracking-[0.4em] uppercase text-xs mb-4"
          >
            Volume No. 04 — Series 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            THE <span className="italic font-light">NEW</span> STANDARD
          </motion.h1>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-2xl shadow-orange-200/50">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-orange-900 leading-tight mb-6">
                We don't just follow trends.
                <br /> We curate the future of your wardrobe.
              </h2>
              <p className="text-orange-500 leading-relaxed">
                LAVA STORE presents the 2026 Lookbook. A collection defined by
                structural integrity, sustainable materials, and the effortless
                confidence of modern street culture.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div>
                <p className="font-bold text-orange-900">Photographer</p>
                <p className="text-orange-500">A. J. Rivera</p>
              </div>
              <div>
                <p className="font-bold text-orange-900">Location</p>
                <p className="text-orange-500">Tokyo, JP</p>
              </div>
            </div>
          </div>

          {/* Lookbook Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {collections.map((look) => (
              <div
                key={look.id}
                className={`group relative overflow-hidden rounded-3xl ${look.className}`}
              >
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {look.tag}
                  </span>
                </div>

                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />

                {/* Glassmorphism Hover Card */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-3xl font-black mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      {look.title}
                    </h3>
                    <p className="text-orange-200 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                      {look.desc}
                    </p>
                    <Link
                      to="/shop"
                      className="inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-xl"
                    >
                      Explore Look <HiOutlineArrowNarrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-24 text-center">
        <h3 className="text-orange-300 text-6xl md:text-9xl font-black opacity-20 select-none">
          LAVA STORE
        </h3>
        <p className="text-2xl md:text-4xl font-light text-orange-800 -mt-8 md:-mt-16 px-4">
          "Fashion is about <span className="font-black">something</span> that
          comes from <span className="italic">within</span> you."
        </p>
      </section>
    </div>
  );
};

export default Lookbook;
