import eLearning from "../assets/e-learning.png";
import sandbox from "../assets/sandbox.png";
import Skills from "../components/Skills";

function Projects() {
  const list1 = ["React.js", "Node.js", "Express.js", "PostgreSQL", "Docker"];
  const list2 = ["React.js", "React Native", "HTML", "CSS"];
  return (
    <section
      id="projects"
      className="flex items-start justify-start flex-col gap-4 mb-20"
    >
      <div>
        <ol>
          <li className="flex flex-row items-start justify-start gap-4 mb-20  hover:bg-[#162032] p-4 rounded">
            <img src={sandbox} className="h-24 w-36 rounded-sm" />
            <div className="flex flex-col items-start justify-start">
              <h2>Hands-on sandbox provider </h2>
              <p className="text-left">
                Developed a web application from scratch, that enables users to
                access a sandbox environment directly from browser. This reduced
                the cost for provisioning sandbox environment by 50%.
              </p>
              <Skills list={list1} />
            </div>
          </li>
          <li className="flex flex-row items-start justify-start gap-4  hover:bg-[#162032] p-4 rounded">
            <img src={eLearning} className="h-24 w-36 rounded-sm" />
            <div className="flex flex-col items-start justify-start">
              <h2>E-learning web application </h2>
              <p className="text-left">
                Developed UI for web and mobile applications that enables users
                to take courses and assessments. Revamped the legacy code base
                to latest react version which improved the application
                performance.
              </p>
              <Skills list={list2} />
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Projects;
