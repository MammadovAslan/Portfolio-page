import Project from "./Project/Project";
import { projectsList } from "./projectsList/projectsList";
import { ProjectI } from "./projectsList/projectsList";
import { ShowSectionI } from "../../../types";

const Projects = ({ show }: ShowSectionI) => {
  return (
    <div className="projects" id='projects'>
      {show && (
        <>
          <div className="projects-title">
            <h1>Projects</h1>
            <h3> Things I’ve built so far</h3>
          </div>
          <div className="projects-container">
            {projectsList.map((el: ProjectI) => (
              <Project
                codelink={el.codelink}
                description={el.description}
                image={el.image}
                livelink={el.livelink}
                techstack={el.techstack}
                title={el.title}
                key={el.id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
