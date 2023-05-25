"use client";
import { motion } from "framer-motion";
const About = () => {
  const containerVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    // <section id="about">
    //   <div className="flex items-center justify-center pt-2 light-bg dark:dark-bg dark:dark-text">
    //     <p className="mt-2 text-2xl text-zinc-700 font-light">About Me:</p>
    //   </div>

    //   {/* <div className=" h-screen flex flex-col justify-center items-center">
    //     <iframe
    //       src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    //       title="YouTube video player"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowFullScreen
    //       className="w-full max-w-screen-lg aspect-video"
    //     ></iframe>
    //   </div> */}
    // </section>
    <section id="about">
      <div className="flex items-center justify-center py-10">
        <motion.div
          className="max-w-2xl p-6 bg-white rounded-lg shadow-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-4xl text-gray-800 font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            mauris eu felis fringilla convallis in nec nulla. Quisque ac felis
            libero. In hac habitasse platea dictumst. Nunc non lectus eget enim
            ultrices euismod. Nulla facilisi. Maecenas sit amet convallis enim,
            id vestibulum metus. In rutrum tortor vel metus fringilla, in varius
            neque scelerisque. Donec accumsan consequat facilisis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
