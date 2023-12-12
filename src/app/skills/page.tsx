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
    description:
      "Extensive experience in client-side scripting with JavaScript.",
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
    description:
      "Proficient in version control using Git for efficient collaboration and code management.",
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
    description:
      "Knowledgeable in building powerful and scalable web applications with Next.js.",
  },
];

const Skills = () => {
  const [isPopoverVisible, setPopoverVisibility] = useState(null);

  const togglePopover = (idx: any) => {
    setPopoverVisibility(isPopoverVisible === idx ? null : idx);
  };

  return (
    <SlideUp offset="-300px 0px -300px 0px">
      <div className="container mx-auto mt-12 my-12 p-4 md:pt-16 md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent">
          My Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <p className="mx-auto md:w-2/4 my-14 p-1  text-center justify-center text-lg">
          As a <span className="text-teal-500">frontend developer</span>,
          possessing skills in HTML5, CSS3, JavaScript, TypeScript, React,
          Tailwind CSS, Bootstrap, Git, GitHub, and Next.js enables proficiency
          in building structured, responsive, and dynamic user interfaces with
          efficient styling and version control management.
        </p>
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto ">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-8 transition-transform duration-500 transform hover:scale-105"
            >
              <div
                className="flex flex-col items-center mx-2 gap-4"
                onMouseEnter={() => togglePopover(idx)}
                onMouseLeave={() => togglePopover(idx)}
              >
                <div>
                  <Image
                    width={96}
                    height={96}
                    src={item.logo}
                    alt="skill-icons"
                  />
                </div>
                <div
                  className={`mt-2 absolute bottom-full left-1/2 transform -translate-x-1/2 text-center bg-none text-dark rounded py-2 px-4 ${
                    isPopoverVisible === idx ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                >
                  <div
                    data-popover
                    id={`popover-${idx}`}
                    role="tooltip"
                    className={`w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ${
                      isPopoverVisible === idx
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    } dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
                  >
                    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="px-3 py-2">
                      <p>{item.description}</p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideUp>
  );
};

export default Skills;
