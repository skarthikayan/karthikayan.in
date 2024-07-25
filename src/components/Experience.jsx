import Skills from "../components/Skills";
function Experience() {
  const list = [
    "React.js",
    "Node.js",
    "Javascript",
    "React Native",
    "Expres.js",
    "PostgreSQL",
    "HTML",
    "CSS",
    "Docker",
    "Git",
  ];

  return (
    <section
      id="experience"
      className="flex items-start justify-start flex-col gap-4 mb-20 p-4"
    >
      <div className="lg:hidden w-screen px-6 py-4 sticky top-0 backdrop-blur -mx-7">
        <h2>Experience</h2>
      </div>
      <div>
        <ol>
          <li className="flex lg:flex-row flex-col items-start justify-start gap-4 lg:hover:bg-[#162032] lg:p-4 rounded">
            <span className="text-s  text-[#94a3b8]">2016 - Present</span>
            <div className="flex flex-col items-start justify-start">
              <h2>Tata Consultancy Services</h2>
              <p className="text-left mt-2">
                Responsible for design, development and maintenance of React.js
                and Node.js web applications. Accountable for making strategic
                decisions regarding application architecture, technology stack,
                security and development practices, ensuring the application
                meets business requirements and industry standards.
              </p>
              <div className="mt-4 gap-2 flex flex-wrap">
                <Skills list={list} />
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Experience;
