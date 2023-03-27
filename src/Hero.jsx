import React from "react";
import Ash from "./assets/Ash.jpeg";
import { RoughNotation } from "react-rough-notation";

function Hero() {
  return (
    <div className="h-[40rem] flex mt-10 justify-between items-center">
      <div>
        <div className="text-5xl font-bold">
          Hello! I am{" "}
          <RoughNotation
            type="highlight"
            animationDelay="700"
            animationDuration={1000}
            show={true}
            color="#000"
          >
            Ashish
          </RoughNotation>
        </div>
        <div>
          <div>
            I had 7 months of experience of working with Amazon as a Software
            Development Engineer.
          </div>
          <div>
            I have sound knowledge of DSA and Full Stack Web Technologies.
          </div>
        </div>
        <div>
          I'm currently looking for a new role as a developer.{" "}
          <RoughNotation
            animationDelay="3000"
            animationDuration={1000}
            type="circle"
            show={true}
            color="#322efc"
          >
            Hire Me?
          </RoughNotation>
        </div>
        <div className="mt-5">
          <span class=" rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700">
            Resume
          </span>
        </div>
      </div>
      <div className="ml-5">
        <img src={Ash} width="300" height="300" className="rounded-full" />
      </div>
    </div>
  );
}

export default Hero;
