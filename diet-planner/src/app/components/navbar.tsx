import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow mb-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center py-10">
        <Link
          href="/"
          className="text-5xl text-red-500 hover:text-red-400 font-semibold transition-colors"
        >
          DietPlanner
        </Link>
        <div className="flex gap-16">
          <Link
            href="/meal-planner"
            className="text-3xl text-gray-700 hover:text-green-600 font-semibold transition-colors"
          >
            Kostplan
          </Link>
          <Link
            href="/food"
            className="text-3xl text-gray-700 hover:text-green-600 font-semibold transition-colors"
          >
            Fødevarer
          </Link>
        </div>
      </div>
    </nav>
  );
}
