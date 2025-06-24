import React from "react";
import Navbar from "../components/navbar";

export default function MealPlanner() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Din kostplan for i dag</h1>
        {/* <DaySelector /> */}
        {/* <NutrientSummary /> */}
        {/* <MealList /> */}
        {/* <AddMealModal /> */}
        <p>Her kan du tilføje, se og redigere dine måltider.</p>
      </main>
    </>
  );
}
