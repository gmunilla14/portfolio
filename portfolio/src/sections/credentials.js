import Skill from "../components/skill";
const Credentials = () => {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "MongoDB",
    "Node",
    "Express",
    "Redux",
    "Bootstrap",
  ];
  return (
    <div className="creds-holder" id="creds-section">
      <div className="statement">
        I am a <strong>full stack web developer.</strong>
      </div>
      <div className="technologies">
        <h3 className="technology-title">Technologies</h3>
        <div className="skills-holder">
          {skills.map((skill) => {
            return <Skill text={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
