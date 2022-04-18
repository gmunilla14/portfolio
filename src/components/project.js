import Skill from "./skill";
import Button from "./button";

const Project = ({
  title,
  metadata,
  oneLiner,
  description,
  skills,
  githubLink,
  liveLink,
  pic
}) => {
  return (
    <div className="project-holder">
      <img className="project-image" src={pic} style={{ width: "50%" }} />
      <div className="project-content">
        <div className="project-title">{title}</div>
        <div className="project-metadata">{metadata}</div>
        <div className="project-oneliner">{oneLiner}</div>
        <div className="project-description">{description}</div>
        <div className="project-btn-holder">
          {githubLink && (
            <a href={githubLink} target="_blank">
              <Button
                text="Github"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#007bfe",
                  color: "#007bfe",
                  borderStyle: "solid",
                  borderWidth: "2px",
                  marginRight: "8px",
                }}
              />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank">
              <Button
                text="View Live"
                style={{
                  borderColor: "#007bfe",
                  borderStyle: "solid",
                  borderWidth: "2px",
                }}
              />
            </a>
          )}
        </div>

        <div
          className="skills-holder project-skills-holder"
          style={{ justifyContent: "start" }}
        >
          {skills.map((skill) => {
            return <Skill text={skill} key={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
