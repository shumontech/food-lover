export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto p-5 animate-pulse">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        
        {/* Image Skeleton */}
        <div className="w-full h-[350px] bg-gray-200 rounded-xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {/* Title */}
          <div className="h-8 w-3/4 bg-gray-200 rounded"></div>

          {/* Tags */}
          <div className="flex gap-3">
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          </div>

          {/* Price */}
          <div className="h-6 w-40 bg-gray-200 rounded"></div>

          {/* Video Button */}
          <div className="h-10 w-48 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
