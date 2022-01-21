import Skill from "./skill";

const Project = ({ title, metadata, oneLiner, description, skills }) => {
  return (
    <div className="project-holder">
      <img className="project-image" src="https://via.placeholder.com/400" style={{width: "50%"}}/>
      <div className="project-content">
        <div className="project-title">{title}</div>
        <div className="project-metadata">{metadata}</div>
        <div className="project-oneliner">{oneLiner}</div>
        <div className="project-description">{description}</div>
        <div className="skills-holder project-skills-holder" style={{ justifyContent: "start" }}>
          {skills.map((skill) => {
            return <Skill text={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
