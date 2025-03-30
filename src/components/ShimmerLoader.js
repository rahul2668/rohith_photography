// ShimmerLoader.js
import React from "react";

const ShimmerLoader = () => {
  return (
    <div className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col border-2 border-gray-300">
      <div className="h-48 bg-gray-300 animate-pulse" /> {/* Image Placeholder */}
      <div className="p-4 flex flex-col space-y-3">
        <div className="h-6 bg-gray-300 animate-pulse w-3/4" /> {/* Title Placeholder */}
        <div className="h-4 bg-gray-300 animate-pulse w-full" /> {/* Description Placeholder */}
      </div>
    </div>
  );
};

export default ShimmerLoader;
