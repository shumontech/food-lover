"use client";

import React, { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(Array.isArray(data) ? data : data.reviews || []))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  // Handle like click
  const handleLike = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id
          ? {
              ...review,
              liked: !review.liked,
              likes: review.liked
                ? review.likes - 1
                : review.likes + 1,
            }
          : review
      )
    );
  };

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };

  const reviewsArray = Array.isArray(reviews) ? reviews : [];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10">Customer Reviews</h1>

      {reviewsArray.length === 0 ? (
        <p className="text-center text-gray-500">Loading reviews...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsArray.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.photo}
                  alt={review.user}
                  className="w-16 h-16 rounded-full border-2 border-white object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg">{review.user}</h2>
                  <p className="text-sm">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <p className="mb-4 flex-1">{review.review}</p>

              {/* Star Rating */}
              <div className="flex items-center mb-2">{renderStars(review.rating)}</div>

              {/* Like Thumbnail */}
              <div className="flex items-center gap-2 mt-auto">
                <button
                  onClick={() => handleLike(review.id)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                    review.liked ? "bg-red-600" : "bg-white"
                  }`}
                >
                  <span className={`text-lg ${review.liked ? "text-white" : "text-red-600"}`}>
                    ❤️
                  </span>
                </button>
                <span className="text-white font-semibold">{review.likes || 0}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
