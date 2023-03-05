import StackItem from "./StackItem/StackItem";
import { StackTechI } from "./stackList/stackList";
import { stackList } from "./stackList/stackList";
import { ShowSectionI } from "../../../types";
import Title from "../../Title/Title";

const TechStack = ({ show }: ShowSectionI) => {
  return (
    <div className="techstack" id="techstack">
      {show && (
        <>
          <Title
            className="techstack-title"
            title="My Tech Stack"
            context="Technologies I’ve been working with recently"
          />
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
