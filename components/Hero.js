const Hero = () => {
  return (
    <section className="dark:bg-black dark:text-white bg-white">
      <h1 className="dark:bg-black dark:text-white text-center font-extrabold tracking-[-0.02em] py-4 text-5xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-zinc-900/90 to-zinc-900">
        Ashkan Sotoudeh
      </h1>
      <div className="flex items-center justify-center pt-2 ">
        <p className="mt-2 text-2xl text-zinc-700 font-light dark:bg-black dark:text-white">
          Mobile Developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
