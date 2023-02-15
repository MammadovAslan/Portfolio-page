import StackItem from "./StackItem/StackItem";
import { StackTechI } from "./StackList/StackList";
import { stackList } from "./StackList/StackList";

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <div className="techstack-title">
        <h1>My Tech Stack</h1>
        <h3> Technologies I’ve been working with recently</h3>
      </div>
      <div className="stacks-container">
        {stackList.map((item: StackTechI) => (
          <StackItem alt={item.alt} image={item.image} link={item.link} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
