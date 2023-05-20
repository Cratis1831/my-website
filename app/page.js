import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 to-zinc-500 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Under Construction
        </h1>
        <div className="flex gap-8">
          <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center">14</h2>
            <p className="text-md text-white text-center">days</p>
          </div>
          <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center">00</h2>
            <p className="text-md text-white text-center">hours</p>
          </div>
          <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center">00</h2>
            <p className="text-md text-white text-center">mins</p>
          </div>
        </div>
        <h1 className="text-xl font-bold text-white my-8">
          Check these out in the mean time
        </h1>
        <div className="text-sm font-normal text-white flex gap-4">
          <Link
            href="https://weather.ash-kan.com"
            target="_blank"
            className="hover:scale-110 transition ease-in-out"
          >
            Weather App
          </Link>
          {" | "}

          <Link
            href="https://prompt.ash-kan.com"
            target="_blank"
            className="hover:scale-110 transition ease-in-out"
          >
            AI Prompt Store App
          </Link>
          {" | "}

          <Link
            href="https://todo.ash-kan.com"
            target="_blank"
            className="hover:scale-110 transition ease-in-out"
          >
            Todo App
          </Link>
        </div>
      </div>
    </main>
  );
}
