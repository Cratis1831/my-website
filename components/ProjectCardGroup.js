import { BsCloudSun, BsPencil } from "react-icons/bs";
import ProjectCard from "./ProjectCard";
import { MdFitnessCenter } from "react-icons/md";
import { motion } from "framer-motion";

const ProjectCardGroup = () => {
  const containerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 1, ease: "easeInOut" } },
  };
  return (
    <motion.div
      // className="max-w-2xl p-6 bg-white rounded-lg shadow-lg"
      className="overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section
        id="portfolio"
        className="md:flex justify-center mt-4 p-20 md:gap-4 md:pt-10 space-y-4 md:space-y-0 light-bg dark:dark-bg dark:dark-text overflow-x-hidden"
      >
        <ProjectCard
          title="Weather App"
          description="A simple weather web app created with NextJS using the Open Weather Map API."
          image={"/weather.png"}
          icon={
            <BsCloudSun
              className="text-zinc-700 hover:text-zinc-900 dark:dark-text"
              size={24}
            />
          }
        />
        <ProjectCard
          title="Fitness App"
          image={"/weather.png"}
          description="A simple weather web app created with NextJS using the Open Weather Map API."
          icon={
            <MdFitnessCenter
              className="text-zinc-700 hover:text-zinc-900 dark:dark-text"
              size={24}
            />
          }
        />
        <ProjectCard
          title="Todo App"
          image={"/weather.png"}
          description="A simple weather web app created with NextJS using the Open Weather Map API."
          icon={
            <BsPencil
              className="text-zinc-700 hover:text-zinc-900 dark:dark-text"
              size={24}
            />
          }
        />
      </section>
    </motion.div>
  );
};

export default ProjectCardGroup;
