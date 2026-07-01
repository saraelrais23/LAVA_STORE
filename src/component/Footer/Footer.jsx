import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
<footer className="bg-gradient-to-b from-[#5e2011] to-[#140C0A] text-orange-200/80 pt-16 pb-8 border-t border-amber-950/30">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-black text-white tracking-tighter">
              LAVA<span className="text-red-500">STORE.</span>
            </Link>
            <p className="text-sm leading-relaxed text-orange-200/80">
              Elevating your lifestyle with curated premium goods. We blend style, quality, and sustainability into every piece we drop.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="p-2 bg-red-920 rounded-lg hover:text-white hover:bg-red-600 transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="p-2 bg-red-920 rounded-lg hover:text-white hover:bg-red-600 transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="p-2 bg-red-920 rounded-lg hover:text-white hover:bg-red-600 transition-all">
                <FaFacebook className="h-6 w-6"/>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Shopping</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="hover:text-red-400 transition-colors">All Collections</Link></li>
              <li><Link to="/top" className="hover:text-red-400 transition-colors">Best Sellers</Link></li>
              <li><Link to="/new" className="hover:text-red-400 transition-colors">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-rose-400 hover:text-rose-300 transition-colors">Flash Sale</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <span>123 Fashion Ave, Digital City, DC 2026</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span>+1 (555) 000-LAVA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <span>hello@LAVAStore.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay in the Contact</h4>
            <p className="text-xs text-orange-200/80 mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-orange-900 border border-orange-700 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-orange-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-orange-200/80 font-medium">
          <p>© 2026 LAVASTORE Studio. Built with Passion.</p>
          <div className="flex gap-8">
            <a href="/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;