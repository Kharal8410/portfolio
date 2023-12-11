import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "../../components/SlideUp";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "BestFood",
    description:
      "BestFood is designed with user-friendly navigation, allowing you to easily explore different sections. Navigate through the menu, learn about our story, discover our specialties, and find information about events and catering services.",
    image: "/bestfood.png",
    github: "https://github.com/Kharal8410/BestFood-f-back.git",
  },
  {
    name: "portfolio",
    description:
      "Portfolio website built using HTML and core CSS features a clean design with sections for the homepage, about me, project showcase, and contact information.",
    image: "/portfolio.png",
    github: "https://github.com/Kharal8410/my-portfolio.git",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio crafted with Next.js, TypeScript, and Tailwind CSS delivers a performant, server-rendered web application with enhanced developer experience. Its modular components, type safety, and utility-first styling allow for efficient development and a responsive, visually polished user interface.",
    image: "/portfolio2.png",
    github: "https://github.com/Kharal8410/next-portfolio.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="p-4 m-4">
      <h1 className="my-10 text-center font-bold text-4xl bg-gradient-to-br from-slate-600 to-orange-500 bg-clip-text text-transparent">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col justify-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/3">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      priority={true}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/3">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl  leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
