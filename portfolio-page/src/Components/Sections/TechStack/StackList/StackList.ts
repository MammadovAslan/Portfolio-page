import { v4 as uuidv4 } from "uuid";
export interface StackTechI {
  id?: string;
  link: string;
  alt: string;
  image: string;
}

export const stackList: StackTechI[] = [
  {
    id: uuidv4(),
    alt: "css3",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    link: "https://www.w3schools.com/css/",
  },
  {
    id: uuidv4(),
    alt: "html5",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    link: "https://html.spec.whatwg.org/multipage/",
  },
  {
    id: uuidv4(),
    alt: "javascript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: uuidv4(),
    alt: "typescript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: uuidv4(),
    alt: "react",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    link: "https://reactjs.org/",
  },
  {
    id: uuidv4(),
    alt: "bootstrap",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    link: "https://getbootstrap.com",
  },
  {
    id: uuidv4(),
    alt: "tailwind",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    link: "https://tailwindcss.com/",
  },
  {
    id: uuidv4(),
    alt: "sass",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    link: "https://sass-lang.com",
  },
  {
    id: uuidv4(),
    alt: "figma",
    image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    link: "https://www.figma.com/",
  },
  {
    id: uuidv4(),
    alt: "git",
    image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    link: "https://git-scm.com/",
  },
];
