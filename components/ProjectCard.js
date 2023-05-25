import Image from "next/image";
const ProjectCard = ({ title, description, icon, image }) => {
  return (
    <div className={`md:skew-y-0`}>
      <div className="shadow-xl transition hover:scale-105 ease-in-out duration-300 cursor-pointer rounded-lg border  dark:border-zinc-700 light:bg-white/20 p-4 md:w-[250px] lg:w-[300px]">
        <div className="flex gap-4 mb-2">
          {icon}
          <p className="font-bold text-sm md:text-lg">{title}</p>
        </div>
        <div className="flex items-start justify-start gap-4">
          {/* Description */}
          <p className="text-xs md:text-sm text-start mt-4">{description}</p>
        </div>
        <div className="grayscale mt-4 ">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
