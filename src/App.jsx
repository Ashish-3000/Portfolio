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
    <div className="mb-10">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
