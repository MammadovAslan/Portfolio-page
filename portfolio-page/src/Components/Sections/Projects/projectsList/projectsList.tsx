import { v4 as uuidv4 } from "uuid";
export interface ProjectI {
  techstack: string;
  image: string;
  title: string;
  description: string;
  livelink: string;
  codelink: string;
  id?: string;
}

export const projectsList: ProjectI[] = [
  {
    techstack: "React, TypeSctipt, Redux, SCSS",
    image: "assets/projects_images/ecommerce.jpg",
    title: "E-commerce store",
    description: "E-commerce project on commerce.js with React+TypeScript",
    codelink: "https://github.com/MammadovAslan/E-commerce-project",
    livelink: "https://tello-ecommerce.vercel.app/",
    id: uuidv4(),
  },
  {
    techstack: "React, SCSS, JavaScript",
    image: "assets/projects_images/musicplayer.jpg",
    title: "Music player ",
    description: "Music player with React",
    codelink: "https://github.com/MammadovAslan/React-media-player",
    livelink: "https://mammadovaslan.github.io/React-media-player",
    id: uuidv4(),
  },
  {
    techstack: "React, SCSS, JavaScript",
    image: "assets/projects_images/countries.jpg",
    title: "Countries List",
    description:
      "List of all Countries. You can get additional information about the country by pressing on its card. All data comes from Rest countries API.",
    codelink: "https://github.com/MammadovAslan/React-countries-rest-api/tree/main",
    livelink: "https://mammadovaslan.github.io/React-countries-rest-api/",
    id: uuidv4(),
  },
  {
    techstack: "React, JavaScript,CSS",
    image: "assets/projects_images/expense_tracker.jpg",
    title: "Expense Tracker",
    description: "This app allows you to track all your expenses. On the first visit you can add your default balance. All data is store in localStorage.",
    codelink: "https://github.com/MammadovAslan/SASS-SCSS-Bootstrap-practice",
    livelink: "https://mammadovaslan.github.io/React_Expense_Tracker/",
    id: uuidv4(),
  },

  {
    techstack: "SCSS, JavaScript, Bootstrap",
    image: "assets/projects_images/nobi.jpg",
    title: "Bootstrap project",
    description:
      "I've built this page with Bootstrap and few lines of JavaScript. Pages:Login, Sign Up, Balance, Calendar, Connetc bank account, Settings",
    codelink: "https://github.com/MammadovAslan/nobi.com",
    livelink: "https://mammadovaslan.github.io/nobi.com/",
    id: uuidv4(),
  },
  {
    techstack: "HTML, SCSS, Bootstrap",
    image: "assets/projects_images/gtdesign.jpg",
    title: "Landing page",
    description: "Simple landing page using Bootstrap and SCSS",
    codelink: "https://github.com/MammadovAslan/SASS-SCSS-Bootstrap-practice",
    livelink: "https://mammadovaslan.github.io/SASS-SCSS-Bootstrap-practice/",
    id: uuidv4(),
  },
  {
    techstack: "HTML, SCSS, JavaScript",
    image: "assets/projects_images/rock_paper_scissors.jpg",
    title: "Rock,paper,scissors game",
    description: "Rock,paper,scissors game using only JavaScript and SCSS.",
    codelink: "https://github.com/MammadovAslan/Rock_paper_scissors",
    livelink: "https://mammadovaslan.github.io/Rock_paper_scissors/",
    id: uuidv4(),
  },

];
