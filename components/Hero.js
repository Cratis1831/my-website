import React from "react";

const Hero = () => {
  return (
    <section>
      <h1 className="text-center font-extrabold tracking-[-0.02em] py-4 text-5xl md:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-zinc-900/60 to-zinc-900">
        Ashkan Sotoudeh
      </h1>
      <div className="flex items-center justify-center pt-2">
        <p className="mt-2 text-2xl text-zinc-700 font-light">
          Mobile Developer
        </p>
      </div>
    </section>
  );
};

export default Hero;