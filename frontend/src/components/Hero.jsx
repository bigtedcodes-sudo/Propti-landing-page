import React from "react";

const Hero = () => {
  return (
    <section className=" relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(blue_1px,transparent_1px)] 
                      [background-size:18px_18px] opacity-20"
      ></div>
      

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#0091FF]">
          Find Your Perfect Property with <span className="text-black">Prôpti</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Discover, buy, and manage properties seamlessly with Propti’s
          innovative real estate solutions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-[#0091FF] text-white font-medium hover:bg-blue-600 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-xl border border-[#0091FF] text-[#0091FF] font-medium hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
