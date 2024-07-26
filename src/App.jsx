import { useState, useRef, useEffect } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import "./App.css";
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
      { rootMargin: "-300px" }
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
  }, []);

  return (
    <div className="flex flex-col lg:flex-row mx-auto min-h-screen max-w-screen-xl lg:px-24">
      <div className="mover" />
      <Header activeSection={activeSection} />
      <main className="lg:w-1/2 lg:py-24 py:12 z-10 px-8">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
