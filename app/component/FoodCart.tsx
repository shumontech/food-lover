// components/FoodCard.tsx
import React from "react";
import Link from "next/link";

type Food = {
  id: number;
  title: string;
  catId: number;
  foodImg: string;
  price: number;
  category: string;
};

interface FoodCardProps {
  food?: Food;        // Optional for loading skeleton
  loading?: boolean;  // Show skeleton if true
}

const FoodCard: React.FC<FoodCardProps> = ({ food, loading = false }) => {
  if (loading) {
    // Loading skeleton
    return (
      <div className="border rounded-xl shadow-lg p-4 animate-pulse space-y-4">
        <div className="bg-gray-300 h-48 w-full rounded-lg"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Food Image */}
      <img
        src={food?.foodImg}
        alt={food?.title}
        className="w-full h-48 object-cover"
      />

      {/* Food Info */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{food?.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{food?.category}</p>
        <p className="font-bold mb-4">৳{food?.price}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Add to Cart
          </button>
          <Link
            href={`/foods/${food?.id}`}
            className="flex-1 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
