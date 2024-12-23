// src/app/blog/[id]/comments.tsx
"use client";
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [formData, setFormData] = useState({ name: "", comment: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comments.length >= 3) {
      setComments([]); // Remove all comments after 3 are posted
    } else {
      setComments([...comments, formData]); // Add new comment
    }
    setFormData({ name: "", comment: "" }); // Reset form
  };

  return (
    <div className="flex justify-center  mt-6">
      <div className="w-full max-w-3xl bg-gradient-to-r from-green-100 to-pink-100 rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-[#E57676] mb-4">Share Your Thoughts</h2>
      
      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
          required
        />
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Your Comment"
          className="w-full p-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-200 focus:outline-none"
          rows={4}
          required
        />
        <button
          type="submit"
          className="w-full bg-[#E57676] text-white py-3 rounded-lg hover:bg-[#f08c8c] transition duration-300"
        >
          Post Comment
        </button>
      </form>

      {/* Display Comments */}
      <div className="mt-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="p-4 mb-4 bg-white shadow-sm rounded-lg">
              <p className="font-semibold text-gray-700">{comment.name}</p>
              <p className="text-gray-600 mt-2">{comment.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default CommentSection;


