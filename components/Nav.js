"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);

  useEffect(() => {
    setIsMainVisible(true);
    localStorage.getItem("theme") === null
      ? localStorage.setItem("theme", "light")
      : setTheme(localStorage.getItem("theme"));
  }, []);

  const [theme, setTheme] = useState(null);
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleIconClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur bg-zinc-100/0 dark:bg-[#0e0e10] dark:text-white">
      <div
        className={`hidden md:flex md:items-center md:justify-between md:h-20 pr-20 lg:pr-40 md:gap-12 transition-opacity ease-in duration-500 ${
          isMainVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pl-4">
          {theme === "light" ? (
            <Image
              src="/logo3.svg"
              width={50}
              height={50}
              alt="logo"
              className="w-50 h-50"
            />
          ) : (
            <Image
              src="/logo_dark.svg"
              width={50}
              height={50}
              alt="logo"
              className="w-50 h-50"
            />
          )}
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <Link href="/">Home</Link>
          <Link href="/">Portfolio</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleIconClick}
              className="relative flex items-center justify-center "
            >
              {/* show this when in dark mode */}
              <BsSunFill
                size={20}
                className={`absolute transition-opacity ease-in duration-500 ${
                  theme === "dark"
                    ? "opacity-100 transition-opacity"
                    : "opacity-0"
                }`}
              />
              {/* show this when in light mode */}
              <BsFillMoonFill
                size={20}
                className={`absolute transition-opacity ease-in duration-500 ${
                  theme === "light"
                    ? "opacity-100 transition-opacity"
                    : "opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden pl-4 pt-4 pr-8 flex justify-between gap-4">
        <HiMenu
          size={30}
          className="text-zinc-900 dark:text-white"
          onClick={() => setShowMenu((prev) => !prev)}
        />

        <button
          onClick={handleIconClick}
          className="relative flex items-center justify-center "
        >
          <BsSunFill
            size={20}
            className={`absolute transition-opacity ease-in duration-500 ${
              theme === "light"
                ? "opacity-0 invisible"
                : "opacity-100 transition-opacity"
            }`}
          />
          <BsFillMoonFill
            size={20}
            className={`absolute transition-opacity ease-in duration-500 ${
              theme === "dark"
                ? "opacity-0 invisible"
                : "opacity-100 transition-opacity"
            }`}
          />
        </button>
      </div>

      {showMenu && (
        <div className="flex flex-col items-center justify-center gap-4 text-xl ">
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
