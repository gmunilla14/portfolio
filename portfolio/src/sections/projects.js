import Project from "../components/project";

const Projects = () => {
  return (
    <Project
      title="This is the title of the portfolio article and it wraps"
      metadata="Web App | Personal Project"
      oneLiner="A one liner describing what this project is all about."
      description="A short description with what you this project is all about and why
  you built it. Shouldn’t be more than a couple of lines."
      skills={[
        "HTML",
        "CSS",
        "React",
        "MongoDB",
        "Node",
        "Express",
        "Redux",
        "Bootstrap",
      ]}
    />
  );
};

export default Projects;
