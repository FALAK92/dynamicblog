
"use client"
import { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from('.hero-text', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
    });
    gsap.from('.hero-image', {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.25,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center hero-image" style={{ backgroundImage: 'url(/4.avif)' }}>
      {/* Overlay for dimming background */}
      <div className="absolute inset-0  opacity-40"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white p-6 hero-text ">
        <h1 className="text-5xl mt-[130px] text-[#f5c4c4] md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          Discover the Enigmatic World of Rare Birds
        </h1>
        <p className="text-xl text-[#f5c4c4] md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Explore the beauty of rare birds from across the globe. Learn, protect, and preserve their unique habitats.
        </p>
        <button className="hero-button text-[#f5c4c4] px-12 py-4 bg-gradient-to-r from-green-400 to-[#b26363] text-lg font-semibold rounded-lg shadow-xl hover:scale-105 transform transition-all ease-in-out duration-300">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Hero;
















