// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Navbar from "./components/Navbar";

// import Contact from "./pages/Contact";

// import Projects from "./pages/Projects";
// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";
// import { Routes, Route } from "react-router";
// function App() {
//   const container = useRef();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main ref={container} className="relative  h-[200]">
//       <Navbar />
//       <Home scrollYProgress={scrollYProgress} />

//       <About scrollYProgress={scrollYProgress} />

//       <Projects scrollYProgress={scrollYProgress} />
//       <Contact scrollYProgress={scrollYProgress} />
//     </main>
//   );
// }

// export default App;
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Navmenu from "./components/Navmenu";

const App = () => {
  return (
    <div>
      <Navmenu />
    </div>
  );
};

export default App;
