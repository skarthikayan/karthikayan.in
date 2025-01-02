import { motion } from "framer-motion";
import eLearning from "../assets/e-learning.png";
import sandbox from "../assets/sandbox.png";

import Tags from "./Tags";

function Projects() {
  const projects = [
    {
      name: "Hands-on sandbox provider",
      description:
        "A web application, that enables users to access a sandbox environment directly from browser. This reduced the dependency on third party vendors, saving significant percentage of the cost incurred. I worked on creating APIs, UI and Docker Images of sandboxes for the application.",
      icon: sandbox,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Jest",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      name: "E-learning web application",
      description:
        "A web applications that enables users to take online courses and assessments. I revamped the legacy UI code base to latest react version which improved the application performance",
      icon: eLearning,
      skills: ["React.js", "Jest", "React Testing Library", "HTML", "CSS"],
    },
  ];
  return (
    <section
      id="projects"
      className=" flex items-start justify-start flex-col gap-4 p-4 lg:p-0 mb-4"
    >
      <div className="lg:hidden w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur -ml-6">
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
