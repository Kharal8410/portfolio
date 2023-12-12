/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import SlideUp from "@/components/SlideUp";

const AboutSection = () => {
  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="my-12 p-4 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-5xl bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent">
          About Me
          <hr className="w-6 h-1 mx-auto mt-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center md:text-lg">
          <div className="md:col-span-3 text-center mb-8">
            {" "}
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={300}
              height={300}
              priority={true}
              className="mx-auto"
            />
          </div>
          <div className="md:col-span-3 md:pr-8 text-lg md:w-2/3 mx-auto">
            {" "}
            <p className="text-justify mb-4 max-w-md md:max-w-full">
              {" "}
              Hey there! I'm Mukunda Kharal, an aspiring{" "}
              <span className="text-teal-500">Frontend Developer</span>,
              currently immersed in the dynamic world of IT. Pursuing my Bsc.IT
              at ISMT College, Chitwan,
              <span className="font-bold"> Sundarland University</span>, I'm
              thrilled to embark on this exciting journey where technology and
              creativity collide.
            </p>
            <p className="text-justify mb-4 max-w-md md:max-w-full">
              {" "}
              In the realm of coding and design, I'm finding my stride with a
              solid foundation in HTML, CSS, JavaScript, ReactJs,{" "}
              <a href="/skills" className="text-teal-500">
                {" "}
                See More
              </a>
              . One of my recent projects,{" "}
              <a href="/projects" className="text-teal-500">
                BestFood
              </a>
              , allowed me to apply and enhance these skills, providing a
              glimpse into the transformative power of frontend development.
            </p>
            <p className="text-justify mb-4 max-w-md md:max-w-full">
              {" "}
              Beyond the syntax and algorithms, I see coding as a means to
              create seamless and engaging user experiences. It's about
              translating ideas into digital interfaces that captivate and
              connect. My approach to frontend development extends beyond
              functionality; it's about crafting aesthetically pleasing and
              intuitive designs.
            </p>
            <p className="text-justify mb-4 max-w-md md:max-w-full">
              {" "}
              Currently, I am actively seeking exciting career opportunities
              that align with my skills and aspirations. I bring a
              self-motivated and driven attitude to any project or team, and I'm
              enthusiastic about contributing to the ever-changing landscape of
              web development. If you have any opportunities or insights to
              share, I'd love to connect!
            </p>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default AboutSection;
