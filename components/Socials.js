import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex items-center justify-center pt-4 gap-8 ">
      <BsGithub
        className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:text-white"
        size={24}
      />
      <BsTwitter
        className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:text-white"
        size={24}
      />
      <BsInstagram
        className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:text-white"
        size={24}
      />
      <BsFacebook
        className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer dark:text-white"
        size={24}
      />
    </div>
  );
};

export default Socials;
