import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div
        className="max-w-6xl mx-auto px-6 py-10 
        bg-white/40 backdrop-blur-xl border border-blue-400/40 rounded-2xl shadow-md"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo + About */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#0091FF]">Prôpti</h2>
            <p className="mt-2 text-gray-600 max-w-xs">
              Helping you discover, buy, and manage properties seamlessly with
              innovative real estate solutions.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-[#0091FF]">Company</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="hover:text-blue-600 cursor-pointer">About</li>
                <li className="hover:text-blue-600 cursor-pointer">Properties</li>
                <li className="hover:text-blue-600 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#0091FF]">Support</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
                <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
                <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 text-[#0091FF]">
            <a href="#" className="hover:text-blue-600">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-blue-600">
              <Linkedin size={22} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-400/40 mt-8 pt-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Prôpti. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
