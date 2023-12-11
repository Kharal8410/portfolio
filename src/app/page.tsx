/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <>
      <div className="p-4 flex flex-col text-center items-center justify-center  my-3 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/3 transition-transform duration-500">
          <Image
            src="/img1.jpg"
            alt=""
            width={325}
            height={325}
            priority={true}
            className="rounded-full shadow-2xl hover:opacity-80 hover:scale-110 transform transition-transform duration-500"
          />
        </div>

        <div className="md:mt-2 md:w-2/5">
          <TypeAnimation
            sequence={["Hi, it's me Mukunda Kharal", 1000]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "3rem",
              display: "inline-block",
            }}
            repeat={Infinity}
            className="font-bold bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent"
          />

          <p className="text-2xl mt-4 mb-6 md:text-lg  ">
            I'am a highly ambitious, self-motivated, and driven{" "}
            <span className="font-semibold text-teal-600">
              FrontEnd Developer{" "}
            </span>
            , committed to pushing the boundaries of web development, constantly
            seeking new challenges, and delivering cutting-edge solutions to
            create impactful and user-centric experiences.
          </p>
          <a
            href="/contact"
            className="text-neutral-100 font-semibold px-6 py-3 bg-gradient-to-br from-slate-600 to-orange-500 rounded-lg shadow hover:from-teal-700 hover:to-orange-600 hover:text-white "
          >
            Contact Me
          </a>

          <a
            href="/cv.pdf"
            download="mukunda-cv.pdf"
            className="text-neutral-100 font-semibold px-6 py-3 mx-2 rounded-lg transition bg-gradient-to-br from-slate-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
