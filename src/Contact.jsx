import React from "react";
import Mail from "./assets/mail.svg";
import Twitter from "./assets/twitter.svg";
import LinkedIn from "./assets/linkedin.svg";
import Github from "./assets/github.svg";

function Contact() {
  return (
    <div id="contact" className="flex gap-5 flex-col sm:flex-row">
      <div className="font-bold text-3xl">Contact</div>
      <div className="sm:hidden">Let's work on something together</div>
      <div className="flex flex-row gap-3">
        <a onClick={() => (window.location = "mailto:yourmail@domain.com")}>
          <img src={Mail} className="rounded w-10" />
        </a>
        <a href="https://twitter.com/Ashish07670175">
          <img src={Twitter} className="rounded w-10" />
        </a>
        <a href="https://www.linkedin.com/in/ashish-singh-b6928a1b0/">
          <img src={LinkedIn} className="rounded w-10" />
        </a>
        <a href="https://github.com/Ashish-3000">
          <img src={Github} className="rounded w-10" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
