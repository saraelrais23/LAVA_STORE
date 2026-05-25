import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

function Hero() {

  return (
    <section className="relative w-full bg-orange-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">
                New Season Arrival
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-orange-900 leading-[1.1] mb-6">
              Elevate Your <br />
              <span className="text-red-600">Everyday Style</span>
            </h1>

            <p className="text-lg text-orange-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover our curated collection of premium essentials designed to
              make you look and feel your best, no matter the occasion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <NavLink to='/shop' className="group px-8 py-4 bg-orange-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-red-600 transition-all shadow-xl shadow-red-200 active:scale-95">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>

              <NavLink to='/lookbook' className="px-8 py-4 bg-white text-orange-900 border border-orange-200 rounded-2xl font-bold hover:bg-orange-50 transition-all active:scale-95">
                View Lookbook
              </NavLink>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-orange-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-orange-900">12k+</p>
                <p className="text-sm text-orange-500">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-orange-200" />
              <div>
                <p className="text-2xl font-bold text-orange-900">500+</p>
                <p className="text-sm text-orange-500">Premium Products</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="flex-1 relative w-full max-w-xl">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://plus.unsplash.com/premium_photo-1683121271931-669e09a55414?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Future in Your Hands"
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-orange-500 font-medium">
                      Flash Sale
                    </p>
                    <p className="text-lg font-bold text-orange-900">
                      Up to 40% Off
                    </p>
                  </div>
                  <div className="bg-rose-500 text-white px-3 py-1 rounded-lg font-bold text-sm">
                    -40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
