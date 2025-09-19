import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (make sure to install: npm i lucide-react)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div
        className="px-6 py-3 flex justify-between items-center
        bg-white/40 backdrop-blur-xl border border-blue-400/40 rounded-2xl shadow-md"
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-[#0091FF]">Prôpti</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-[#0091FF] font-medium">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Properties</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-4 py-2 bg-[#0091FF] text-white rounded-xl border border-blue-500 hover:bg-blue-600 transition">
          Sign In
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#0091FF] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mt-3 px-6 py-4 flex flex-col space-y-4
          bg-white/70 backdrop-blur-xl border border-blue-400/40 rounded-2xl shadow-md md:hidden"
        >
          <a href="#" className="text-[#0091FF] font-medium hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-[#0091FF] font-medium hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-[#0091FF] font-medium hover:text-blue-600">
            Properties
          </a>
          <a href="#" className="text-[#0091FF] font-medium hover:text-blue-600">
            Contact
          </a>
          <button className="px-4 py-2 bg-[#0091FF] text-white rounded-xl border border-blue-500 hover:bg-blue-600 transition">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
