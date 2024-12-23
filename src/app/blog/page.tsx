"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { birdsData } from "../lib/post";
import Image from "next/image";

const BlogPage = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#E57676]">Rare Birds Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {birdsData.map((bird) => (
          <div
            key={bird.id}
            ref={addToRefs}
            className="bg-gradient-to-r from-pink-100 to-green-100 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl"
          >
            <Image
            width={500}
            height={500}
              src={bird.image}
              alt={bird.name}
              className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-[#E57676] text-2xl font-semibold mb-2 ">{bird.name}</h2>
              <p className="text-gray-400 italic mb-4">{bird.scientificName}</p>
              <p className="text-gray-500 mb-4">{bird.description.slice(0, 100)}...</p>
              <a
                href={`/blog/${bird.id}`}
                className="text-[#e86969] font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;



