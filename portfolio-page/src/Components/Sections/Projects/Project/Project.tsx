import { ProjectI } from "../projectsList/projectsList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

const Project = ({ codelink, description, image, livelink, techstack, title }: ProjectI) => {
  return (
    <div className="project">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="project-summary">
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <p className="project-stack">
            <span>Tech Stack: </span>
            {techstack}
          </p>
        </div>
        <div className="links-container">
          <a href={livelink} target="_blank" className="codelink">
            <LinkOutlinedIcon />
            Live Preview
          </a>
          <a href={codelink} target="_blank" className="codelink">
            <GitHubIcon />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
