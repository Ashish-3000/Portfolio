import { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
// TODO:
// import Blog from "./Blog";

function App() {
  return (
    <div className="mb-10 ml-5 mr-5 lg:ml-[9rem] lg:mr-[9rem] md:ml-[7rem] md:mr-[7rem] sm:ml-[5rem] sm:mr-[5rem]">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
