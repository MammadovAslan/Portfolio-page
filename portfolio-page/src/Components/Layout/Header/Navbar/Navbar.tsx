import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Navbar = () => {

  return (
    <nav className={`navbar `}>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#">Home</a>
        </li>
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="#techstack">Tech Stack</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
        <li className="nav-link">
          <span className="link-git">
            <a href="https://github.com/MammadovAslan" target="_blank">
              <GitHubIcon />
            </a>
          </span>
          <span className="link-linkedin">
            <a href="https://www.linkedin.com/in/aslan-mammadov-b5ba34ba/" target="_blank">
              <LinkedInIcon />
            </a>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
