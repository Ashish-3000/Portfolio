import React from "react";
import Mail from "./assets/mail.svg";
import Twitter from "./assets/twitter.svg";
import LinkedIn from "./assets/linkedin.svg";

function Contact() {
  return (
    <div id="contact" className="flex gap-5">
      <div className="font-bold text-3xl">Contact</div>
      <a onClick={() => (window.location = "mailto:yourmail@domain.com")}>
        <img src={Mail} className="rounded w-10" />
      </a>
      <a href="https://twitter.com/Ashish07670175">
        <img src={Twitter} className="rounded w-10" />
      </a>
      <a href="https://www.linkedin.com/in/ashish-singh-b6928a1b0/">
        <img src={LinkedIn} className="rounded w-10" />
      </a>
    </div>
  );
}

export default Contact;
