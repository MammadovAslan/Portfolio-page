import { StackTechI } from "../stackList/stackList";

const StackItem = ({ alt, image, link }: StackTechI) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="stack-item">
      <img src={image} alt={alt} width="60" height="60" />{" "}
    </a>
  );
};

export default StackItem;
