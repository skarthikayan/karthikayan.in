import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.css";
function App() {
  let root = document.documentElement;

  root.addEventListener("mousemove", (e) => {
    console.log(e);
    root.style.setProperty("--mouse-x", e.clientX - 500 + "px");
    root.style.setProperty("--mouse-y", e.clientY - 500 + "px");
  });

  return (
    <div className="flex flex-col lg:flex-row mx-auto min-h-screen max-w-screen-xl lg:px-24 p-4 ">
      <div className="mover" />
      <Header />
      <main className="lg:w-1/2 lg:py-24 py:12 z-10">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
