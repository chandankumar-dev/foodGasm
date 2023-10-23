import React from "react";

export default function ShimmerUI() {
  return (
    <div className="container mx-auto max-w-screen-xl p-6 my-1 flex justify-center">
      <div
        data-testid="shimmer"
        className="grid grid-cols-1 sm2:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-6 xl:gap-8 mt-8"
      >
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div
              className="animate-pulse w-56 h-80 min-w-[250px] max-h-[400px]"
              key={index}
            >
              <div className="bg-gray-400 rounded-lg m-2 h-2/4"></div>
              <div className="bg-gray-400 m-2 h-7 "></div>
              <div className="bg-gray-400 m-2 h-6 w-3/4"></div>
              <div className="bg-gray-400 m-2 h-5"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
