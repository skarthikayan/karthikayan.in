import { motion } from "framer-motion";
import eLearning from "../assets/e-learning.png";
import icis from "../assets/icis.png";
import sandbox from "../assets/sandbox.png";

import Tags from "./Tags";

function Projects() {
  const projects = [
    {
      name: "ICIS - Idependent Commodity Intelligence Services",
      link: "https://www.icis.com/explore/about/?intcmp=mega-menu-explore-about",
      description:
        "A web application that provides market intelligence and data analytics for the global chemical, energy, and fertilizer industries. I worked on building  UI for the application.",
      icon: icis,
      skills: [
        "React.js",
        "Styled Components",
        "Piral",
        "Micro Frontends",
        "Jest",
        "Docker",
      ],
    },
    {
      name: "Fresco Labs - An online Coding Platform",
      description:
        "A web application, that enables users to access a coding environment directly from browser. This reduced the dependency on third party vendors, saving significant percentage of the cost incurred. I worked on creating APIs, UI and Docker Images of sandboxes for the application.",
      icon: sandbox,
      skills: [
        "React.js",
        "Tailwindcss",
        "Node.js",
        "Express.js",
        "Jest",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      name: "Fresco Play - An online Learning Platform",
      description:
        "A web applications that enables users to take online courses and assessments. I revamped the legacy UI code base to latest react version which improved the application performance",
      icon: eLearning,
      skills: [
        "React.js",
        "Redux",
        "Webpack",
        "HTML",
        "Jest",
        "React Testing Library",
        "Styled Components",
      ],
    },
  ];
  return (
    <section
      id="projects"
      className=" flex items-start justify-start flex-col gap-4 p-4 lg:p-0 mb-4"
    >
      <div className="lg:w-full w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur bg-primaryTransparent -ml-6">
        <h2 className="font-bold text-textTitle">WORK PROJECTS</h2>
      </div>
      <div>
        <ol>
          {projects.map((project) => (
            <motion.li
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.15, once: true }}
              key={project.name}
              className="group flex lg:flex-row flex-col-reverse items-start justify-start gap-4 mb-12 lg:p-4 lg:hover:shadow-effect rounded-lg"
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
                <Tags list={project.skills} />
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Projects;
