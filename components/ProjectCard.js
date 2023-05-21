import React from "react";

const ProjectCard = ({ title, description, icon }) => {
  return (
    <div>
      <div className="shadow-lg transition hover:scale-105 ease-in-out duration-200 cursor-pointer rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter md:w-[300px] w-full h-fit">
        <div className="flex items-start justify-start gap-4">
          {icon}
          <p className="font-bold text-sm md:text-lg">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
