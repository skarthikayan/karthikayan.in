import clsx from "clsx";

import GithubIcon from "../assets/githubIcon.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import MailIcon from "../assets/mail.svg?react";

function Header({ activeSection }) {
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
  const quote = "Code is like humour. When you have to explain it, it's bad!";
  return (
    <>
      <h1 className="text-4xl font-semibold text-textTitle">{name}</h1>
      <h2 className="text-xl font-normal mt-3 text-textTitle">{title}</h2>
      <p className="text-base italic  mt-3">{quote}</p>
      <div className="flex justify-center items-center gap-4 mt-3">
        {externalLinks.map((externalLink) => (
          <a
            key={externalLink.link}
            target="_blank"
            href={externalLink.link}
            aria-label={externalLink.label}
          >
            {externalLink.icon}
          </a>
        ))}
      </div>
      <nav className="hidden lg:flex flex-col justify-center items-start mt-6 gap-4 min-h-[50vh] ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={clsx(
              "cursor-pointer hover:border-b hover:border-textTitle hover:text-textTitle hover:transition-all hover:tracking-[.20em]	",
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
