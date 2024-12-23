"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const AboutPage = () => {
  useEffect(() => {
    // GSAP Animations
    const timeline = gsap.timeline({ defaults: { duration: 1.5, ease: "power3.out" } });
    timeline
      .fromTo(".heading", { opacity: 0, y: -50 }, { opacity: 1, y: 0 })
      .fromTo(".paragraph", { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, "-=1")
      .fromTo(".image", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 }, "-=1");
  }, []);

  return (
    <div className="relative min-h-screen p-10 text-[#E57676]">
      {/* 3D Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f5c4c4] via-green-200 to-[#fbc2eb] opacity-90"></div>
        <div
          className="absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 70%)] 
          animate-gradient-animation"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="heading text-5xl font-extrabold mb-6">
          Exploring the Beauty of Nature
        </h1>
        <p className="paragraph text-lg leading-relaxed mb-8">
          Welcome to our world of rare birds! Driven by a deep passion for nature, 
          our blog is dedicated to uncovering and celebrating the extraordinary 
          wonders of the natural world. Rare birds are not just a marvel but a 
          reminder of the beauty we must protect for future generations.
        </p>
        <div className="image-container flex justify-center">
          <Image
          width={500}
          height={500}
            src="/2.png"
            alt="Rare bird"
            className="image rounded-xl shadow-lg w-3/4 max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;





