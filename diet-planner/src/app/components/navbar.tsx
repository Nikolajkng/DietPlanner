import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow mb-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center py-10">
        <div className="text-5xl font-extrabold text-green-600 tracking-tight mb-6">
          DietPlanner
        </div>
        <div className="flex gap-16">
          <Link
            href="meal-planner/MealPlanner"
            className="text-3xl text-gray-700 hover:text-green-600 font-semibold transition-colors"
          >
            Kostplan
          </Link>
          <Link
            href="/food/Food"
            className="text-3xl text-gray-700 hover:text-green-600 font-semibold transition-colors"
          >
            Fødevarer
          </Link>
        </div>
      </div>
    </nav>
  );
}
