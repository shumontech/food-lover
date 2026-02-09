// components/FoodCardSkeleton.tsx
import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="border border-gray-700 rounded-xl shadow-md p-4 animate-pulse space-y-4 bg-gray-900">
      {/* Image skeleton */}
      <div className="bg-gray-700 h-48 w-full rounded-lg"></div>

      {/* Title */}
      <div className="h-5 bg-gray-700 rounded w-3/4"></div>

      {/* Category */}
      <div className="h-4 bg-gray-600 rounded w-1/2"></div>

      {/* Price */}
      <div className="h-5 bg-gray-700 rounded w-1/4"></div>

      {/* Buttons */}
      <div className="flex gap-2">
        <div className="flex-1 h-10 bg-gray-700 rounded-lg"></div>
        <div className="flex-1 h-10 bg-gray-700 rounded-lg"></div>
      </div>
      
    </div>
  );
};

export default FoodCardSkeleton;
