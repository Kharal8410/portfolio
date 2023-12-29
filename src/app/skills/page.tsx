"use client";
import React, { useState } from "react";
import Image from "next/image";
import SlideUp from "@/components/SlideUp";

const skills = [
  {
    title: "HTML 5",
    logo: "/html.svg",
    description: "Solid foundation in HTML for building structured web pages.",
  },
  {
    title: "CSS 3",
    logo: "/css.svg",
    description: "Proficient in styling and layout techniques using CSS.",
  },
  {
    title: "JavaScript",
    logo: "/javascript.svg",
    description: "Experience in client-side scripting with JavaScript.",
  },
  {
    title: "TypeScript",
    logo: "/typescript.svg",
    description:
      "Knowledgeable in TypeScript for building scalable and maintainable applications.",
  },
  {
    title: "React",
    logo: "/react.svg",
    description:
      "Expertise in building dynamic user interfaces with the React library.",
  },
  {
    title: "Tailwind CSS",
    logo: "/tailwindcss.svg",
    description:
      "Skilled in using Tailwind CSS for efficient and utility-first styling.",
  },
  {
    title: "Bootstrap",
    logo: "/bootstrap.svg",
    description:
      "Experience in responsive web design with the Bootstrap framework.",
  },
  {
    title: "Git",
    logo: "/git.svg",
    description: "Proficient in version control using Git for code management.",
  },
  {
    title: "GitHub",
    logo: "/github.svg",
    description:
      "Familiarity with GitHub for hosting and collaborating on Git repositories.",
  },
  {
    title: "Next.js",
    logo: "/nextjs.svg",
    description: "Knowledgeable in building web applications with Next.js.",
  },
];

const Skills = () => {
  const [activePopover, setActivePopover] = useState(null);

  const togglePopover = (idx: any) => {
    setActivePopover((prev) => (prev === idx ? null : idx));
  };

  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="container mx-auto mt-12 my-12 p-4 md:pt-16 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent">
          My Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <p className="mx-auto md:w-2/4 my-14 p-1 text-center justify-center text-lg ">
          As a <span className="text-teal-500">frontend developer</span>,
          possessing skills in HTML5, CSS3, JavaScript, TypeScript, React,
          Tailwind CSS, Bootstrap, Git, GitHub, and Next.js enables proficiency
          in building structured, responsive, and dynamic user interfaces with
          efficient styling and version control management.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-center max-w-6xl mx-auto ">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="group transition-transform duration-500 transform hover:scale-105"
            >
              <div
                className="flex flex-col items-center mx-2 m-6 relative"
                onMouseEnter={() => togglePopover(idx)}
                onMouseLeave={() => togglePopover(idx)}
              >
                <Image
                  width={96}
                  height={96}
                  priority={true}
                  src={item.logo}
                  alt="skill-icons"
                />

                {activePopover === idx && (
                  <div className="popover above-icons absolute -top-28 w-[14rem] rounded-xl border p-3 bg-teal-500">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm ">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideUp>
  );
};

export default Skills;
