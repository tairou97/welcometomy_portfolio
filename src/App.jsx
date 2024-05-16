import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div>
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
