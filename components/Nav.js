"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdSafetyDivider } from "react-icons/md";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    setIsMainVisible(true);
  }, []);

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur duration-1000 bg-zinc-100/0 ">
      {/* <div
        className={`hidden md:flex md:items-center md:justify-end md:h-20 md:pr-40 md:gap-12
      transition-transform ease-linear duration-1000 translate-x-${
        isMainVisible ? "0" : "full"
      }
      `}
      > */}

      <div
        className={`hidden md:flex md:items-center md:justify-end md:h-20 md:pr-40 md:gap-12 transition-opacity ease-in duration-500 ${
          isMainVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="md:hidden p-4">
        <HiMenu
          size={30}
          className="text-zinc-900"
          onClick={() => setShowMenu((prev) => !prev)}
        />
        {showMenu && (
          <div className="flex flex-col items-center justify-center gap-4 text-xl">
            <Link href="/">Home</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <hr className="text-zinc-900 w-2/3" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
