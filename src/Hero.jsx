import React from "react";
import Ash from "./assets/Ash.jpeg";
import { RoughNotation } from "react-rough-notation";

function Hero() {
  return (
    <div className="sm:h-[40rem] flex flex-col-reverse lg:flex-row md:flex-row sm:flex-row mt-10 justify-between items-center">
      <div>
        <div className="text-3xl sm:text-5xl font-bold">
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
            <div>
              I have around 3 years of experience of working with Amazon and Project44 as a Software
              Development Engineer.
            </div>
            <div>
              I have sound knowledge of DSA and Full Stack Web Technologies.
            </div>
          </div>
          <div>
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
        </div>
        <div className="mt-5">
          <span className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700">
            <a
              className="decoration-white hover:decoration-black"
              href="https://dub.sh/kLZsGnJ"
            >
              Resume
            </a>
          </span>
        </div>
      </div>
      <div className="sm:block lg:ml-5 md:ml-5 sm:ml-5">
        <img
          src={Ash}
          width="400"
          height="800"
          className="rounded-full sm:rounded mt-5 mb-5"
        />
      </div>
    </div>
  );
}

export default Hero;
