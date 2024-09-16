import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Title from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import PersonalProjects from "./components/PersonalProjects";

function App() {
  let root = document.documentElement;
  root.addEventListener("mousemove", (e) => {
    root.style.setProperty("--mouse-x", e.clientX - 500 + "px");
    root.style.setProperty("--mouse-y", e.clientY - 500 + "px");
  });

  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          setActiveSection(visibleSection.id);
        }
      },
      { rootMargin: "-400px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  });

  return (
    <div className="flex flex-col lg:flex-row mx-auto min-h-screen max-w-screen-xl lg:px-24">
      <div className="spotlight" />
      <header className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2  lg:py-28 py-20 px-8 flex flex-col justify-start items-start z-10">
        <Title activeSection={activeSection} />
      </header>
      <main className="lg:w-1/2 lg:py-24 py:12 z-10 px-6">
        <About />
        <Experience />
        <Projects />
        <PersonalProjects />
      </main>
    </div>
  );
}

export default App;
