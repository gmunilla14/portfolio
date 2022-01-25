import Button from "../components/button";

const Intro = () => {
  return (
    <div className="intro-section-holder" id="intro-section">
      <div className="intro-holder">
        <div className="hey">Hey 👋🏻</div>
        <div className="title">I'm Greg, software engineer</div>
        <div className="introduction">
          I use my experience in system design and passion for problem solving to produce client-facing software solutions.
        </div>
        <a href="#contact-page-holder">
          <Button text="Contact Me" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
