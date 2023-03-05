import Hero from "../../Sections/Hero/Hero";
import TechStack from "../../Sections/TechStack/TechStack";
import Projects from "../../Sections/Projects/Projects";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { useState, useEffect } from "react";

const MainContainer = () => {
  const { height, width } = useWindowDimensions();
  const [showTechStack, setShowTechStack] = useState(height > 800);
  const [showProjects, setShowProjects] = useState(height > 1300);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300 && window.pageYOffset < 600) {
        setShowTechStack(true);
      } else if (window.pageYOffset > 900 && width > 800) {
        setShowProjects(true);
      } else if (window.pageYOffset > 1900 && width < 800) {
        setShowProjects(true);
      }
    });
  }, []);

  return (
    <div className="main">
      <Hero />
      <TechStack show={showTechStack} />
      <Projects show={showProjects} />
    </div>
  );
};

export default MainContainer;
