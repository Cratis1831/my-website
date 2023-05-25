"use client";
import { motion } from "framer-motion";
const Hero = () => {
  const containerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };
  return (
    <section className="dark:dark-bg dark:dark-text light-bg">
      <motion.div
        //className="max-w-2xl p-6 bg-white rounded-lg shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="light-bg dark:dark-bg dark:dark-text text-center font-extrabold tracking-[-0.02em] py-4 text-5xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-zinc-900/90 to-zinc-900">
          Ashkan Sotoudeh
        </h1>
        <div className="flex items-center justify-center pt-2 ">
          <p className="mt-2 text-2xl text-zinc-700 font-light light-bg dark:dark-bg dark:dark-text">
            Mobile Developer
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
