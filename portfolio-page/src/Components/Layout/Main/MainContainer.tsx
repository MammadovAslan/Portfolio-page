import Hero from "../../Sections/Hero/Hero";
import TechStack from "../../Sections/TechStack/TechStack";
import Projects from "../../Sections/Projects/Projects";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { useState, useEffect } from "react";

const MainContainer = () => {
  const { height } = useWindowDimensions();
  const [showTechStack, setShowTechStack] = useState(height > 800);
  const [showProjects, setShowProjects] = useState(height > 1300);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300 && window.pageYOffset < 600) {
        setShowTechStack(true);
      } else if (window.pageYOffset > 600) {
        setShowProjects(true);
      }
    });
  }, []);

  return (
    <div>
      <Hero />
      <TechStack show={showTechStack} />
      <Projects show={showProjects} />
    </div>
  );
};

export default MainContainer;
