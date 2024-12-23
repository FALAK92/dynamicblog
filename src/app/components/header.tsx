"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#aaefb0] border-b border-gray-100 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-[#E57373] font-bold text-2xl">
          <Link href="/">My Blog</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-9 mr-8 pr-6 text-xl">
          <Link href="/" className="text-[#E57373] hover:text-[#f05e5e]">
            Home
          </Link>
          <Link href="/about" className="text-[#E57373] hover:text-[#f05e5e]">
            About
          </Link>
          <Link href="/blog" className="text-[#E57373] hover:text-[#f05e5e]">
            Blog
          </Link>
          <Link href="/contact" className="text-[#E57373] hover:text-[#f05e5e]">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#e73b3b] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#aaefbo] border-t border-gray-100`}
      >
        <div className="flex flex-col items-center space-y-4 p-4 text-xl">
          <Link href="/" className="text-[#E57373] hover:text-[#f05e5e]">
            Home
          </Link>
          <Link href="/about" className="text-[#E57373] hover:text-[#f05e5e]">
            About
          </Link>
          <Link href="/blog" className="text-[#E57373] hover:text-[#f05e5e]">
            Blog
          </Link>
          <Link href="/contact" className="text-[#E57373] hover:text-[#f05e5e]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

