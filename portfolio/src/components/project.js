import Skill from "./skill";
import pic from '../req-website-jpeg.JPG'

const Project = ({ title, metadata, oneLiner, description, skills }) => {
  return (
    <div className="project-holder">
      <img className="project-image" src={pic} style={{width: "50%"}}/>
      <div className="project-content">
        <div className="project-title">{title}</div>
        <div className="project-metadata">{metadata}</div>
        <div className="project-oneliner">{oneLiner}</div>
        <div className="project-description">{description}</div>
        <div className="skills-holder project-skills-holder" style={{ justifyContent: "start" }}>
          {skills.map((skill) => {
            return <Skill text={skill} key={skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
