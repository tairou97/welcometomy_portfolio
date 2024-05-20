import { useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useScroll } from "framer-motion";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: [" start start", " end end"],
  });
  return (
    <div ref={container} className=" relative">
      <Navbar />

      <section id="home">
        <Home scrollYProgress={scrollYProgress} />
      </section>
      <section id="about">
        <About scrollYProgress={scrollYProgress} />
      </section>
      <section id="project">
        <Projects scrollYProgress={scrollYProgress} />
      </section>
    </div>
  );
}

export default App;
