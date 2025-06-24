import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-200 shadow mb-8">
      <div className="max-w-3xl mx-40 flex flex-row items-center py-7">

        {/* Go To Home*/}
        <div className="mr-15">
          <Link
            href="/"
            className="text-4xl text-red-500 hover:text-red-400 font-semibold transition-colors">
            🍖 DietPlanner
          </Link>
        </div>

        {/* Menu options  */}
        <div className="flex gap-8">
          <Link
            href="/meal-planner"
            className="text-2xl text-gray-700 hover:text-green-600 font-semibold transition-colors">
            Kostplan
          </Link>
          <Link
            href="/food"
            className="text-2xl text-gray-700 hover:text-green-600 font-semibold transition-colors">
            Fødevarer
          </Link>
        </div>
      </div>
    </nav>
  );
}
