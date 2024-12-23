// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#aaefb0] text-[#E57676] py-1">
      <div className="max-w-4xl mx-auto text-center">
        {/* Footer Text */}
        <p className="text-lg font-semibold">
          Thank you for visiting my blog! 💚 <span className="text-2xl">🐦🐦</span>
        </p>
        

        {/* Icons */}
        <div className=" flex justify-center space-x-4">
          {/* Heart Icon */}
          <div className="w-10 h-10 bg-[#E57676]  flex items-center justify-center rounded-full shadow-lg">
            ❤️
          </div>
          {/* Bird Icons */}
          <div className="w-10 h-10 bg-[#E57676] flex items-center justify-center rounded-full shadow-lg">
            🐦
          </div>
          <div className="w-10 h-10 bg-[#E57676] flex items-center justify-center rounded-full shadow-lg">
            🕊️
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 text-sm text-[#E57676]">
          © {new Date().getFullYear()} Rare Birds Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
