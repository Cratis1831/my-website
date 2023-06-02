"use client";

import Socials from "@/components/Socials";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
import ProjectCardGroup from "@/components/ProjectCardGroup";

//import About from "@/components/About";
// import { cookies } from "next/headers";

export default function Home() {
  // const cookieStore = cookies();
  // console.log(cookieStore.getAll());
  // console.log(getCookies());

  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    setIsMainVisible(true);
  }, []);

  if (!isMainVisible) {
    return null;
  }

  return (
    <main
      id="home"
      className={`overflow-x-hidden light-bg dark:dark-bg dark:dark-text text-zinc-900 p-4 md:min-h-screen`}
    >
      {/* Hero */}
      <Hero />

      {/* Projects */}
      <ProjectCardGroup />

      {/* Socials */}
      <Socials />
    </main>
  );
}
