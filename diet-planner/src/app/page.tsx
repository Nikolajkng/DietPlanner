import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <main>
          <div className="flex justify-around">
            <h1 className="text-4xl font-bold">Welcome to Diet Planner</h1>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          Footer
        </footer>
      </div>
    </>
  );
}
