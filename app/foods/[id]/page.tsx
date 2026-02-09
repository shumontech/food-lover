// app/foods/[id]/page.tsx
import React from "react";

const getSingleFood = async (id: string) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // ✅ unwrap the promise
  const food = await getSingleFood(id);   // ✅ await added

  if (!food) {
    return <h2 className="text-center text-xl font-semibold">Food not found 😢</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        
        {/* Image */}
        <div>
          <img
            src={food?.foodImg}
            alt={food?.title}
            className="w-full h-[350px] object-cover rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{food.title}</h1>

          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
              {food.category}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {food.area}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
              Vegan
            </span>
          </div>

          <p className="text-xl font-semibold">
            Price: <span className="text-green-600">৳ {food.price}</span>
          </p>

          {/* Video */}
          {food.video && (
            <a
              href={food.video}
              target="_blank"
              className="inline-block mt-3 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              ▶ Watch Recipe Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
