export interface ProjectI {
  techstack: string;
  image: string;
  title: string;
  description: string;
  livelink: string;
  codelink: string;
  id?: string;
}
import { v4 as uuidv4 } from "uuid";

export const projectsList: ProjectI[] = [
  {
    techstack: "React, TypeSctipt, Redux, SCSS",
    image: "src/assets/projects_images/ecommerce.jpg",
    title: "E-commerce store",
    description: "E-commerce project on commerce.js with React+TypeScript",
    codelink: "https://github.com/MammadovAslan/E-commerce-project",
    livelink: "https://tello-ecommerce.vercel.app/",
    id: uuidv4(),
  },
  {
    techstack: "React, SCSS, JavaScript",
    image: "src/assets/projects_images/musicplayer.jpg",
    title: "Music player ",
    description: "Music player with React",
    codelink: "https://github.com/MammadovAslan/React-media-player",
    livelink: "https://mammadovaslan.github.io/React-media-player",
    id: uuidv4(),
  },
];
