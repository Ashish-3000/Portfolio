import React from "react";

function Nav() {
  return (
    <div className="flex flex-row justify-between">
      <div className="basis-1/4 text-lg">
        <a href="/">Ashish Singh</a>
      </div>
      <div className="flex flex-row justify-around">
        <div className="mr-5">
          <a href="/">About</a>
        </div>
        <div className="mr-5">
          <a href="#experience">Experience</a>
        </div>
        <div className="mr-5">
          <a href="#projects">Projects</a>
        </div>
        {/* TODO:
         <div className="mr-5">
          <a href="#blog">Blog</a>
        </div> */}
        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
