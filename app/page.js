"use client";
import { BsCloudSun, BsPencil } from "react-icons/bs";
import { MdFitnessCenter } from "react-icons/md";
import Socials from "@/components/Socials";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
// import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import About from "@/components/About";

export default function Home() {
  // const cookieStore = cookies();
  // console.log(cookieStore.getAll());
  // console.log(getCookies());

  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    setIsMainVisible(true);
  }, []);

  return (
    <main
      id="home"
      className={`dark:bg-[#0e0e10] dark:text-white bg-white text-zinc-900 p-4 transition-opacity ease-in duration-500 md:min-h-screen ${
        isMainVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero */}
      <Hero />

      {/* Projects */}
      <section
        id="portfolio"
        className="md:flex justify-center mt-4 p-20 md:gap-4 md:pt-10 space-y-4 md:space-y-0 dark:bg-[#0e0e10] dark:text-white"
      >
        <ProjectCard
          title="Weather App"
          description="A simple weather web app created with NextJS using the Open Weather Map API."
          image={"/weather.png"}
          icon={
            <BsCloudSun
              className="text-zinc-700 hover:text-zinc-900 dark:text-white"
              size={24}
            />
          }
        />
        <ProjectCard
          title="Fitness App"
          image={"/weather.png"}
          description="A simple weather web app created with NextJS using the Open Weather Map API."
          icon={
            <MdFitnessCenter
              className="text-zinc-700 hover:text-zinc-900 dark:text-white"
              size={24}
            />
          }
        />
        <ProjectCard
          title="Todo App"
          image={"/weather.png"}
          description="A simple weather web app created with NextJS using the Open Weather Map API."
          icon={
            <BsPencil
              className="text-zinc-700 hover:text-zinc-900 dark:text-white"
              size={24}
            />
          }
        />
      </section>

      {/* Socials */}
      <Socials />

      <div
        id="about"
        className="flex items-center justify-center pt-8 gap-8 dark:bg-[#0e0e10] dark:text-white"
      >
        <p className="dark:bg-[#0e0e10] dark:text-white">
          Site Under Construction...
        </p>
      </div>
    </main>
  );
}
