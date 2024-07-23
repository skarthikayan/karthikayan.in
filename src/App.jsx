import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import "./App.css";
function App() {
  return (
    <div className="flex lg:flex-row sm:flex-col mx-auto min-h-screen max-w-screen-xl px-24 ">
      <Header />
      <main className="w-1/2 py-24">
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
