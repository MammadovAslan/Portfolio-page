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
    alt: "react",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    link: "https://reactjs.org/",
  },
  {
    id: uuidv4(),
    alt: "Redux",
    image: "https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png",
    link: "https://redux.js.org/",
  },
  {
    id: uuidv4(),
    alt: "javascript ES6+",
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
    alt: "Mui",
    image: "https://mui.com/static/logo.png",
    link: "https://mui.com/",
  },
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
    alt: "bootstrap",
    image:
      "data:image/jpeg;base64,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",
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
  {
    id: uuidv4(),
    alt: "npm",
    image: "https://cdn.iconscout.com/icon/free/png-256/npm-3-1175132.png",
    link: "https://www.npmjs.com/",
  },
  {
    id: uuidv4(),
    alt: "VScode",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    link: "https://code.visualstudio.com/",
  },
  {
    id: uuidv4(),
    alt: "ajax",
    image: "https://icon-library.com/images/ajax-icon/ajax-icon-7.jpg",
    link: "https://www.w3schools.com/js/js_ajax_intro.asp",
  },
];
