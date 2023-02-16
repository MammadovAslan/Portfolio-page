import StackItem from "./StackItem/StackItem";
import { useState, useEffect } from "react";
import { StackTechI } from "./StackList/StackList";
import { stackList } from "./StackList/StackList";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const TechStack = () => {
  const { height } = useWindowDimensions();
  const [showTechStack, setShowTechStack] = useState(height > 800);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowTechStack(true);
      }
    });
  }, []);

  useEffect(() => {
    height > 800 && setShowTechStack(true);
  }, [height]);

  return (
    <div className="techstack" id="techstack">
      {showTechStack && (
        <>
          <div className="techstack-title">
            <h1>My Tech Stack</h1>
            <h3> Technologies I’ve been working with recently</h3>
          </div>
          <div className="stacks-container">
            {stackList.map((item: StackTechI) => (
              <StackItem alt={item.alt} image={item.image} link={item.link} key={item.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TechStack;
