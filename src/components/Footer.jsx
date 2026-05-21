/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1320] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID بدل flex-wrap */}
<div className="grid grid-cols-2 sm:grid-cols-1  gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="font-black text-xl tracking-wider">FitLife</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Transforming lives through fitness, health, and wellness since 2010. Join our community today and begin your journey to a better you.
            </p>

          <div className="flex gap-3 text-gray-400 text-xs pt-2">

  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:text-white cursor-pointer transition-colors">
    <FaFacebookF />
  </span>

  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:text-white cursor-pointer transition-colors">
    <FaInstagram />
  </span>

  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:text-white cursor-pointer transition-colors">
    <FaTwitter />
  </span>

  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center hover:text-white cursor-pointer transition-colors">
    <FaYoutube />
  </span>

</div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm tracking-wide text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Classes</li>
              <li className="hover:text-white cursor-pointer transition-colors">Membership</li>
              <li className="hover:text-white cursor-pointer transition-colors">Trainers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm tracking-wide text-gray-200">Working Hours</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><span className="text-gray-200 font-medium">Monday - Friday:</span> 5:00 AM - 11:00 PM</li>
              <li><span className="text-gray-200 font-medium">Saturday:</span> 6:00 AM - 10:00 PM</li>
              <li><span className="text-gray-200 font-medium">Sunday:</span> 7:00 AM - 9:00 PM</li>
              <li><span className="text-gray-200 font-medium">Holidays:</span> 8:00 AM - 8:00 PM</li>
            </ul>

            <div className="pt-2">
              <button className="bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded hover:bg-red-700 transition-colors">
                Book a Session
              </button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide text-gray-200">Newsletter</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Subscribe to our newsletter for fitness tips, special offers, and updates.
            </p>

            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-[#162235] border border-gray-700/60 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-gray-800/80 text-center md:flex md:justify-between text-[11px] text-gray-500">
        <p>© 2026 FitLife Fitness Center. All rights reserved.</p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2 md:mt-0 hover:text-white transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;