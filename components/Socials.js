"use client";
import { motion } from "framer-motion";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Socials = () => {
  const containerVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };
  return (
    <>
      <motion.div
        // className="max-w-2xl p-6 bg-white rounded-lg shadow-lg"
        className="overflow-y-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-center pt-4 gap-8 ">
          <BsGithub
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:dark-text"
            size={24}
          />
          <BsTwitter
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:dark-text"
            size={24}
          />
          <BsInstagram
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:dark-text"
            size={24}
          />
          <BsFacebook
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:dark-text"
            size={24}
          />
        </div>
        <div
          id="about"
          className="flex items-center justify-center pt-8 gap-8 light-bg dark:dark-bg dark:dark-text"
        >
          <p className="dark:dark-bg dark:dark-text">
            Site Under Construction...
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Socials;
