import triptreasure from "../assets/triptreasure.png";
import portfolio from "../assets/portfolio.png";

import DemoIcon from "../assets/demo.svg?react";
import SourceCode from "../assets/source-code.svg?react";

import Tags from "./Tags";

function PersonalProjects() {
  const projects = [
    {
      name: "Trip Treasure",
      description: "A website for booking tours and travels all around world.",
      icon: triptreasure,
      skills: ["React.js", "Typescript", "Tailwindcss", "HTML", "Vite"],
      sourceCode: "https://github.com/skarthikayan/triptreasure",
      demo: "https://skarthikayan.github.io/triptreasure/",
    },
    {
      name: "My Portfolio",
      description: "A website to showcase my work and technical skills.",
      icon: portfolio,
      skills: ["React.js", "Javascript", "Tailwindcss", "HTML", "Vite"],
      sourceCode: "https://github.com/skarthikayan/karthikayan.in",
    },
  ];
  return (
    <section
      id="personal-projects"
      className=" flex items-start justify-start flex-col gap-4 mb-20 p-4 lg:p-0"
    >
      <div className="lg:hidden w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur -ml-6">
        <h2 className="font-bold text-textTitle">PERSONAL PROJECTS</h2>
      </div>
      <div>
        <ol>
          {projects.map((project) => (
            <li
              key={project.name}
              className="group flex lg:flex-row flex-col-reverse items-start justify-start gap-4 mb-20 lg:p-4 lg:hover:bg-white/10 rounded-lg cursor-pointer"
            >
              <img
                alt={project.name}
                src={project.icon}
                height={200}
                width={300}
                loading="lazy"
                decoding="async"
                className="lg:w-36 w-52 object-contain rounded-sm"
              />
              <div className="flex flex-col items-start justify-start">
                <h2 className="group-hover:text-sectionTitle text-textTitle">
                  {project.name}
                </h2>
                <p className="text-left">{project.description}</p>
                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      target="_blank"
                      href={project.demo}
                      aria-label="project demo"
                      className="flex gap-4 my-4 hover:text-tags"
                    >
                      <DemoIcon />
                      <p>Demo</p>
                    </a>
                  )}
                  {project.sourceCode && (
                    <a
                      target="_blank"
                      href={project.sourceCode}
                      aria-label="project source code"
                      className="flex gap-4 my-4 hover:text-tags"
                    >
                      <SourceCode />
                      <p>Source Code</p>
                    </a>
                  )}
                </div>
                <Tags list={project.skills} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default PersonalProjects;
