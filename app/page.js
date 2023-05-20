import Image from "next/image";
import Link from "next/link";
import {
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsCloudSun,
  BsPencil,
} from "react-icons/bs";

import { MdFitnessCenter } from "react-icons/md";

import React from "react";
export default function Home() {
  return (
    <main className="bg-white text-zinc-900">
      <div className="items-center justify-center mt-8">
        <h1 className="text-center font-extrabold tracking-[-0.02em] py-4 text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-tr from-zinc-900/60 to-zinc-900">
          Ashkan Sotoudeh
        </h1>

        <div className="flex items-center justify-center pt-2">
          <p className="mt-2 text-2xl text-zinc-700 font-light">
            Mobile Developer
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-20">
          <div className=" transition hover:scale-105 ease-in-out duration-200 cursor-pointer break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter md:w-[300px] w-full h-fit">
            <div className="flex items-start justify-start gap-4">
              <BsCloudSun
                className="text-4xl text-zinc-700 hover:text-zinc-900"
                size={24}
              />
              <p className="font-bold">Weather App</p>
            </div>
          </div>
          <div className=" transition hover:scale-105 ease-in-out duration-200 cursor-pointer break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter md:w-[300px] w-full h-fit">
            <div className="flex items-start justify-start gap-4">
              <MdFitnessCenter
                className="text-4xl text-zinc-700 hover:text-zinc-900"
                size={24}
              />
              <p className="font-bold">Fitness App</p>
            </div>
          </div>
          <div className=" transition hover:scale-105 ease-in-out duration-200 cursor-pointer break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter md:w-[300px] w-full h-fit">
            <div className="flex items-start justify-start gap-4">
              <BsPencil
                className="text-4xl text-zinc-700 hover:text-zinc-900"
                size={24}
              />
              <p className="font-bold">Todo App</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8 gap-8">
          <BsGithub
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer"
            size={24}
          />
          <BsTwitter
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer"
            size={24}
          />
          <BsInstagram
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer"
            size={24}
          />
          <BsFacebook
            className="inline-block text-4xl text-zinc-700 hover:text-zinc-900 transition hover:scale-105 ease-in-out duration-200 cursor-pointer"
            size={24}
          />
        </div>
        <div className="flex items-center justify-center pt-8 gap-8">
          <p>Site Under Construction...</p>
        </div>
      </div>
    </main>
  );
}
