import clsx from "clsx";
import { useState } from "react";

import GithubIcon from "../assets/githubIcon.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import TwiterIcon from "../assets/twitter.svg?react";
import MailIcon from "../assets/mail.svg?react";

function Header() {
  const [activeTab, setActiveTab] = useState("#about");
  const navItems = [
    { name: "About", id: "#about" },
    { name: "Work Experience", id: "#experience" },
    { name: "Projects", id: "#projects" },
  ];
  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2  lg:py-28 py-20 px-8 flex flex-col justify-start items-start z-10">
      <h1 className="text-4xl font-semibold">Karthikayan Selvaraj</h1>
      <h2 className="text-xl font-normal mt-3">Senior Software Engineer</h2>
      <p className="text-base italic  mt-3">
        "Code is like humour. When you have to explain, it's bad!"
      </p>
      <div className="flex justify-center items-center gap-4 mt-3">
        <MailIcon />
        <GithubIcon />
        <LinkedInIcon />
        <TwiterIcon />
        <InstagramIcon />
      </div>
      <nav className="hidden lg:flex flex-col justify-center items-start mt-6 gap-4 min-h-[50vh] ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActiveTab(item.id)}
            className={clsx(
              "hover:border-b hover:border-white hover:text-white cursor-pointer",
              activeTab === item.id && "border-b border-white text-white"
            )}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
