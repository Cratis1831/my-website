"use client";
// import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const icon = {
    hidden: { pathLength: 0, opacity: 0, fill: "rgba(255, 255, 255, 0)" },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        fill: "rgba(255, 255, 255, 1)",
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  useEffect(() => {
    setMounted(true);
    document.body.className = theme;
    setIsMainVisible(true);
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

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

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur light-bg dark:dark-bg dark:dark-text">
      <div
        className={`hidden md:flex md:items-center md:justify-between md:h-20 pr-20 lg:pr-40 md:gap-12 transition-opacity ease-in duration-500 ${
          isMainVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="pl-4">
          <svg
            width="50"
            height="50"
            viewBox="0 0 750 893"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M288.753 161.008L324.26 45.7703L788.359 836.126L606.937 837.163L497.904 652.582L538.776 603.72L288.753 161.008Z"
              stroke="#0e0e10"
              stroke-width="15"
              variants={icon}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M356.806 403.747L261.832 234.939L78.439 838.964L222.437 838.141L356.806 403.747Z"
              stroke="#0e0e10"
              stroke-width="15"
              variants={icon}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              d="M468.005 614.314L391.183 482.615L277.249 837.828L468.005 614.314Z"
              stroke="#0e0e10"
              stroke-width="15"
              variants={icon}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>
        <div className="md:flex md:items-center md:gap-12">
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
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
                  theme !== "dark"
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
          className="text-zinc-900 dark:dark-text"
          onClick={() => setShowMenu((prev) => !prev)}
        />

        <svg
          width="50"
          height="50"
          viewBox="0 0 750 893"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M288.753 161.008L324.26 45.7703L788.359 836.126L606.937 837.163L497.904 652.582L538.776 603.72L288.753 161.008Z"
            stroke="#0e0e10"
            stroke-width="15"
            variants={icon}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M356.806 403.747L261.832 234.939L78.439 838.964L222.437 838.141L356.806 403.747Z"
            stroke="#0e0e10"
            stroke-width="15"
            variants={icon}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M468.005 614.314L391.183 482.615L277.249 837.828L468.005 614.314Z"
            stroke="#0e0e10"
            stroke-width="15"
            variants={icon}
            initial="hidden"
            animate="visible"
          />
        </svg>

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
