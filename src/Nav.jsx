import React from "react";

function Nav() {
  return (
    <div className="flex flex-row sm:justify-end justify-start">
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
  );
}

export default Nav;
