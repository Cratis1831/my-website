"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdSafetyDivider } from "react-icons/md";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur duration-1000 bg-zinc-100/0">
      <div className="hidden md:flex md:items-center md:justify-end md:h-20 md:pr-40 md:gap-12">
        <Link href="/">Home</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="md:hidden p-4">
        <HiMenu
          size={30}
          className="text-zinc-900"
          onClick={() => setShowMenu(!showMenu)}
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