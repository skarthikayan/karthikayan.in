import Tags from "./Tags";
import { motion } from "framer-motion";

function Experience() {
  const companies = [
    {
      name: "Tata Consultancy Services",
      period: "2016 - Present",
      description:
        "Responsible for design, development and maintenance of React.js and Node.js web applications. Accountable for making strategic decisions regarding application architecture, technology stack, security and development practices, ensuring the application meets business requirements and industry standards.",
      skills: [
        "Technical Lead 2023-2025",
        "Senior Developer 2020-2023",
        "Junior Developer 2016-2020",
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
        <ol>
          {companies.map((company) => (
            <motion.li
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ amount: 0.15, once: true }}
              key={company.name}
              className="group flex lg:flex-row flex-col items-start justify-start gap-4 lg:p-4 rounded-lg lg:hover:shadow-effect"
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
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
