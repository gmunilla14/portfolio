import Intro from "../sections/intro";
import Credentials from "../sections/credentials";
import Projects from "../sections/projects";
import Contact from "../sections/contact";
import NavBar from "../sections/navbar";
const Main = () => {

    window.onscroll = () => {
        var introRect = document.getElementById('intro-section').getBoundingClientRect()
        
        if (introRect.y >= (-(introRect.height/2) + 70)){
            console.log('introduction')
            var credsRect = document.getElementById('creds-section').getBoundingClientRect()
            console.log(credsRect)
        } else if (credsRect.y >= (-(credsRect.height/2) + 70)){
            console.log('creds')
            
        }
        
    }
  return (
    <>
      <NavBar />
      <Intro />
      <Credentials />
      <Projects id="projects-section" />
      <Contact id="contact-section"/>
    </>
  );
};

export default Main;
