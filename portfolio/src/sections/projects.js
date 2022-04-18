import Project from "../components/project";
import pic from "../req-website-jpeg.JPG";
import workoutPic from "../tracker_iphone_jpeg.jpeg"


const Projects = () => {
  return (
    <div id="projects-section">
      <Project
        title="Workout Tracker"
        metadata="Mobile App | Personal Project"
        oneLiner="A workout tracking app that allows for precise rest time and progress visualization"
        description="Create custom exercises a plans and use real time set editing to tune each set for the most flexible tracking experience, and then view your progress over time on different exercises while factoring in different rest times. Developed using TDD and Postman API testing"
        skills={[
          "HTML",
          "React Native",
          "Jest",
          "Chai",
          "MongoDB",
          "Node",
          "Express",
          "Redux",
          "Postman",
        ]}
        githubLink="https://github.com/gmunilla14/Workout-Tracker"
        pic={workoutPic}
      />
      <Project
        title="Requirements Host"
        metadata="Web App | Personal Project"
        oneLiner="A place to keep project requirements/design artifacts and collaborate with teammates."
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
        githubLink="https://github.com/gmunilla14/Requirements_Host"
        liveLink="https://www.requirements-host.com/"
        pic={pic}
      />
    </div>
  );
};

export default Projects;
