"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    setIsMainVisible(true);
  }, []);

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur duration-1000 bg-zinc-100/0 ">
      <div
        className={`hidden md:flex md:items-center md:justify-between md:h-20 pr-20 lg:pr-40 md:gap-12 transition-opacity ease-in duration-500 ${
          isMainVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pl-4">
          <Image src="/logo3.svg" width={50} height={50} alt="logo" />
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <Link href="/">Home</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      <div className="md:hidden p-4">
        <HiMenu
          size={30}
          className="text-zinc-900"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </div>

      {showMenu && (
        <div className="flex flex-col items-center justify-center gap-4 text-xl">
          <Link href="/" onClick={() => setShowMenu((prev) => !prev)}>
            Home
          </Link>
          <Link href="/" onClick={() => setShowMenu((prev) => !prev)}>
            Portfolio
          </Link>
          <Link href="/" onClick={() => setShowMenu((prev) => !prev)}>
            About
          </Link>
          <Link href="/" onClick={() => setShowMenu((prev) => !prev)}>
            Contact
          </Link>
          <hr className="text-zinc-900 w-2/3" />
        </div>
      )}
    </nav>
  );
};

export default Nav;
