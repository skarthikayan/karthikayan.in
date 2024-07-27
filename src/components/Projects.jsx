import eLearning from "../assets/e-learning.png";
import sandbox from "../assets/sandbox.png";
import Tags from "./Tags";

function Projects() {
  const projects = [
    {
      name: "Hands-on sandbox provider",
      description:
        "Developed a web application from scratch, that enables users to access a sandbox environment directly from browser. This reduced the cost for provisioning sandbox environment by 50%.",
      icon: sandbox,
      skills: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    },
    {
      name: "E-learning web application",
      description:
        "Developed UI for web and mobile applications that enables users to take courses and assessments. Revamped the legacy code base to latest react version which improved the application performance.",
      icon: eLearning,
      skills: ["React.js", "React Native", "HTML", "CSS"],
    },
  ];
  return (
    <section
      id="projects"
      className=" flex items-start justify-start flex-col gap-4 mb-20 p-4 lg:p-0"
    >
      <div className="lg:hidden w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur -mx-7">
        <h2 className="font-bold">PROJECTS</h2>
      </div>
      <div>
        <ol>
          {projects.map((project) => (
            <li className="group flex lg:flex-row flex-col-reverse items-start justify-start gap-4 mb-20  lg:hover:bg-[#162032] lg:p-4 rounded cursor-pointer">
              <img
                src={project.icon}
                className="lg:h-24 lg:w-36 h-36 w-52 rounded-sm"
              />
              <div className="flex flex-col items-start justify-start">
                <h2 className="group-hover:text-[#5eead4]">{project.name}</h2>
                <p className="text-left">{project.description}</p>
                <Tags list={project.skills} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Projects;
