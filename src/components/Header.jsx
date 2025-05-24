import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

import GithubIcon from "../assets/githubIcon.svg?react";
// import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import MailIcon from "../assets/mail.svg?react";
// import DownlaodIcon from "../assets/download.svg?react";

function Header({ activeSection }) {
  const [randomNum] = useState(Math.floor(Math.random() * 4));
  const navItems = [
    { name: "ABOUT", id: "about" },
    { name: "WORK EXPERIENCE", id: "experience" },
    { name: "WORK PROJECTS", id: "projects" },
    { name: "PERSONAL PROJECTS", id: "personal-projects" },
  ];

  const externalLinks = [
    {
      icon: <MailIcon />,
      link: "mailto:skarthikayan7@gmail.com",
      label: "Send e-mail",
    },
    {
      icon: <GithubIcon />,
      link: "https://github.com/skarthikayan",
      label: "View github profile",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/karthikayan-s",
      label: "View linkedin profile",
    },
    {
      icon: <TwitterIcon />,
      link: "https://x.com/imkarthikayan",
      label: "View twitter profile",
    },
    // {
    //   icon: <InstagramIcon />,
    //   link: "https://instagram.com/karthikayan.s",
    //   label: "View instagram profile",
    // },
  ];

  const name = "Karthikayan Selvaraj";
  const title = "Senior Software Engineer";
  const quotes = [
    "First, solve the problem. Then, write the code.",
    "The best error message is the one that never shows up.",
    "Make it work, make it right, make it fast.",
    "A good code is its own best documentation.",
  ];
  const quoteLetter = Array.from(quotes[randomNum]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delay: 1.5,
        delayChildren: 1.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold text-textTitle"
      >
        {name}
      </motion.h1>
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl font-normal mt-3 text-textTitle"
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-base italic  mt-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {quoteLetter.map((letter, index) => (
          <motion.span key={letter + index} variants={item}>
            {letter}
          </motion.span>
        ))}
      </motion.p>
      <div className="flex justify-center items-center gap-4 mt-3">
        {externalLinks.map((externalLink) => (
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            key={externalLink.link}
            target="_blank"
            href={externalLink.link}
            aria-label={externalLink.label}
            className="hover:svg-hightlight"
          >
            {externalLink.icon}
          </motion.a>
        ))}
      </div>
      {/* <div className="flex items-center mt-3">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex text-textTitle cursor-pointer text-lg items-center hover:underline"
          target="_blank"
          aria-label="View Resume"
          href="/resume.pdf"
        >
          <span className="mr-3">Résumé</span>
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex text-textTitle cursor-pointer text-lg items-center"
          download="karthikayan_selvaraj"
          target="_blank"
          aria-label="Download Resume"
          href="/resume.pdf"
        >
          <DownlaodIcon />
        </motion.a>
      </div> */}
      <nav className="hidden lg:flex flex-col justify-center items-start mt-6 gap-4 min-h-[50vh] ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              "cursor-pointer hover:border-b hover:border-textTitle hover:text-textTitle hover:transition-all hover:tracking-[.20em]",
              activeSection === item.id &&
                "border-b border-textTitle text-textTitle tracking-[.20em] transition-all"
            )}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
}

export default Header;
