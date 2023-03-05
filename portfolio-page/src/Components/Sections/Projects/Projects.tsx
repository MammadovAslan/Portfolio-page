import Project from "./Project/Project";
import { projectsList } from "./projectsList/projectsList";
import { ProjectI } from "./projectsList/projectsList";
import { ShowSectionI } from "../../../types";
import Title from "../../Title/Title";

const Projects = ({ show }: ShowSectionI) => {
  return (
    <div className="projects" id="projects">
      {show && (
        <>
          <Title className="projects-title" title="Projects" context="Things I’ve built so far" />
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
