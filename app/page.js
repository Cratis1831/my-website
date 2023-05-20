import { BsCloudSun, BsPencil } from "react-icons/bs";

import { MdFitnessCenter } from "react-icons/md";

import React from "react";
import Socials from "@/components/Socials";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="dark:bg-black bg-white text-zinc-900 dark:text-white p-4 mt-8">
      {/* Hero */}
      <Hero />

      {/* Projects */}
      <section className="md:flex items-center justify-center mt-4 p-20 md:gap-4 md:pt-20 space-y-4 md:space-y-0">
        <ProjectCard
          title="Weather App"
          description=""
          icon={
            <BsCloudSun
              className="text-zinc-700 hover:text-zinc-900"
              size={24}
            />
          }
        />
        <ProjectCard
          title="Fitness App"
          description=""
          icon={
            <MdFitnessCenter
              className="text-zinc-700 hover:text-zinc-900"
              size={24}
            />
          }
        />
        <ProjectCard
          title="Todo App"
          description=""
          icon={
            <BsPencil className="text-zinc-700 hover:text-zinc-900" size={24} />
          }
        />
      </section>

      {/* Socials */}
      <Socials />

      <div className="flex items-center justify-center pt-8 gap-8">
        <p>Site Under Construction...</p>
      </div>
    </main>
  );
}
