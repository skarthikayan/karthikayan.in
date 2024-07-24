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
    root.style.setProperty("--mouse-x", e.clientX - 300 + "px");
    root.style.setProperty("--mouse-y", e.clientY - 300 + "px");
  });

  return (
    <div className="flex lg:flex-row sm:flex-col mx-auto min-h-screen max-w-screen-xl px-24 ">
      <div className="mover" />
      <Header />
      <main className="w-1/2 py-24 z-10">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
