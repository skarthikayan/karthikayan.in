import Tags from "./Tags";
import { motion } from "framer-motion";
import ExternalLink from "../assets/external-link.svg?react";

function Experience() {
  const companies = [
    {
      name: "LexisNexis Risk Solutions (RELX Group)",
      link: "https://risk.lexisnexis.com/global/en/about-us",
      period: "2025 - Present",
      description:
        "Contributing to the development of a large-scale, high-performance web application using React.js. Responsible for implementing new features, optimizing performance, and ensuring code quality through unit testing and code reviews.",
      skills: ["Senior Software Developer II"],
    },
    {
      name: "Tata Consultancy Services",
      link: "https://www.tcs.com/who-we-are",
      period: "2016 - 2025",
      description:
        "Responsible for design, development and maintenance of React.js and Node.js web applications. Accountable for making strategic decisions regarding application architecture, technology stack, security and development practices, ensuring the application meets business requirements and industry standards.",
      skills: [
        "Senior Software Developer 2020-2025",
        "Software Developer 2016-2020",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="flex items-start justify-start flex-col gap-4 mb-16 p-4 lg:p-0"
    >
      <div className="lg:w-full w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur bg-primaryTransparent  -ml-6">
        <h2 className="font-bold text-textTitle">EXPERIENCE</h2>
      </div>
      <div>
        <ol className="flex flex-col gap-5">
          {companies.map((company) => (
            <a
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              key={company.name}
            >
              <motion.li
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ amount: 0.15, once: true }}
                className="group flex lg:flex-row flex-col items-start justify-start gap-4 lg:p-4 rounded-lg lg:hover:shadow-effect cursor-pointer"
              >
                <span className="text-s min-w-14">{company.period}</span>
                <div className="flex flex-col items-start justify-start">
                  <h2 className="group-hover:text-sectionTitle text-textTitle flex gap-2">
                    {company.name}
                    <ExternalLink />
                  </h2>
                  <p className="text-left mt-2">{company.description}</p>
                  <div className="mt-4 gap-2 flex flex-wrap">
                    <Tags list={company.skills} />
                  </div>
                </div>
              </motion.li>
            </a>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
