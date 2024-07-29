import Tags from "./Tags";
import DownlaodIcon from "../assets/download.svg?react";

function Experience() {
  const companies = [
    {
      name: "Tata Consultancy Services",
      period: "2016 - Present",
      description:
        "Responsible for design, development and maintenance of React.js and Node.js web applications. Accountable for making strategic decisions regarding application architecture, technology stack, security and development practices, ensuring the application meets business requirements and industry standards.",
      skills: [
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
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="flex items-start justify-start flex-col gap-4 mb-20  p-4 lg:p-0"
    >
      <div className="lg:hidden w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur -ml-6">
        <h2 className="font-bold text-textTitle">EXPERIENCE</h2>
      </div>
      <div>
        <ol>
          {companies.map((company) => (
            <li
              key={company.name}
              className="group flex lg:flex-row flex-col items-start justify-start gap-4  hover:border hover:border-tags  lg:p-4 rounded cursor-pointer"
            >
              <span className="text-s">{company.period}</span>
              <div className="flex flex-col items-start justify-start">
                <h2 className="group-hover:text-sectionTitle text-textTitle">
                  {company.name}
                </h2>
                <p className="text-left mt-2">{company.description}</p>
                <div className="mt-4 gap-2 flex flex-wrap">
                  <Tags list={company.skills} />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <a
        className="p-1 flex text-textTitle cursor-pointer"
        download="karthikayan_selvaraj"
        target="_blank"
        href={import.meta.env.BASE_URL + "/resume.pdf"}
      >
        <DownlaodIcon /> <span className="ml-3">Résumé</span>
      </a>
    </section>
  );
}

export default Experience;
