import { motion } from "framer-motion";
function About() {
  function getExperience() {
    const doj = new Date("10 November 2016");
    const totalYears = new Date().getYear() - doj.getYear() + 1;
    const totalMonths = totalYears * 12;
    const differenceMonthsDOJ = doj.getMonth();
    const differenceMonthsCurrentYear = 12 - new Date().getMonth();
    const actualMonths =
      totalMonths - differenceMonthsCurrentYear - differenceMonthsDOJ;

    return (actualMonths / 12).toFixed(2);
  }
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="flex items-start justify-start flex-col gap-4 mb-20 p-4"
    >
      <div className="lg:hidden w-[calc(100vw-1rem)] px-6 py-4 sticky top-0 backdrop-blur -ml-6">
        <h2 className="font-bold text-textTitle">ABOUT</h2>
      </div>
      <p className="text-left">
        As a Senior Software Engineer with over{" "}
        <span className="text-textTitle">
          {getExperience()} years of hands-on experience in React.js and
          Node.js,
        </span>{" "}
        I'm passionate about pushing the boundaries of technology. I thrive on
        <span className="text-textTitle"> solving complex problems </span> and
        continuously seek out new challenges to expand my skill set.
      </p>
      <p className="text-left">
        In my downtime, you can find me immersed in video games or a game of
        chess. I also love winding down with a good movie or binge-worthy
        series. This blend of interests keeps me both mentally sharp and
        creatively inspired.
      </p>
      <p className="text-left">
        I'm eager to take on roles that let me leverage my expertise and passion
        for cutting-edge technologies to drive innovation and
        <span className="text-textTitle"> deliver impactful solutions.</span>
      </p>
    </motion.section>
  );
}

export default About;
