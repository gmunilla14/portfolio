import Project from "../components/project";

const Projects = () => {
  return (
    <div id="projects-section">
      <Project
        title="Requirements Host"
        metadata="Web App | Personal Project"
        oneLiner="A place to keep project requirements and collaborate with teammates."
        description="Keep your requirements, projects, and links all in one place with this requirements database. Take advantage of inline editing, frontend filtering, role based access, and light/dark mode to optimize your design experience."
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
    </div>
  );
};

export default Projects;
