import React from "react";

export default function Home() {
  return (
    <>
      <div>
        <main className="flex flex-col justify-around item-center mx-40 my-4">
          
          {/* Homepage Title */}
          <div className="flex flex-row">
            <h1 className="text-col font-bold text-6xl py-4 text-gray-700">
              Welcome to&nbsp;
            </h1>
            <h1 className="text-col font-bold text-6xl py-4 text-red-400">
              Diet Planner!
            </h1>
          </div>
          
          {/* Content Paragraphs */}
          <h2 className="text-2xl text-gray-700">
            Create your meal plan and discover some shit
          </h2>
        </main>
      </div>
    </>
  );
}
