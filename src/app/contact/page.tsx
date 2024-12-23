
"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" }); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-200 to-yellow-100 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl text-[#E57676] font-bold text-center mb-6">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 border border-pink-300 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-3 border border-pink-300 rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="w-full p-3 border border-pink-300 rounded-lg"
            rows={5}
            required
          />
          <button type="submit" className="w-full bg-gradient-to-r from-green-300 to-[#E57676] text-white py-3 rounded-lg  transition duration-300">
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/FALAK92" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-[#E57676] hover:text-green-300 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/falak-naaz-447371262/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-[#E57676] hover:text-green-300 transition duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-[#E57676] hover:text-green-300 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

