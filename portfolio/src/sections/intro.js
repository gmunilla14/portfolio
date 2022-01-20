import Button from "../components/button";

const Intro = () => {
  return (
    <div className="intro-section-holder">
      <div className="intro-holder">
          <div className="hey">Hey 👋🏻</div>
          <div className="title">I'm Greg, software engineer</div>
          <div className="introduction">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        <Button text="Contact Me" />
      </div>
    </div>
  );
};

export default Intro;
