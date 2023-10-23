import React from "react";

export default function ShimmerHelp() {
  return (
    <div className="container mx-auto max-w-screen-md p-6">
      {Array(12)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="animate-pulse h-14 w-full my-4 p-1 md:p-6 bg-gray-400 rounded-md"
          />
        ))}
    </div>
  );
}
