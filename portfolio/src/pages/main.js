import Intro from "../sections/intro";
import Credentials from "../sections/credentials";
import Projects from "../sections/projects";
import Contact from "../sections/contact";
import NavBar from "../sections/navbar";
import { useState } from "react";
const Main = () => {
  const [status, setStatus] = useState("");

  window.onscroll = () => {
    var introRect = document
      .getElementById("intro-section")
      .getBoundingClientRect();

    if (introRect.y >= -(introRect.height / 2) + 70) {
      setStatus("introduction");
    } else {
      var credsRect = document
        .getElementById("creds-section")
        .getBoundingClientRect();
      if (credsRect.y >= -(credsRect.height / 2) + 70) {
        setStatus("creds");
      } else {
        var contactRect = document
          .getElementById("contact-page-holder")
          .getBoundingClientRect();
        if (contactRect.y <= (window.screen.height - 70) / 2) {
          setStatus("contact");
        } else {
          setStatus("projects");
        }
      }
    }
  };
  return (
    <>
      <NavBar status={status}/>
      <Intro />
      <Credentials />
      <Projects id="projects-section" />
      <Contact id="contact-section" />
    </>
  );
};

export default Main;
