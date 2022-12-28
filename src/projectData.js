import { projectImages } from "./assets/images/index.js";

const {
  projectTea,
  projectGithub,
  projectDemo1,
  projectDemo2,
  projectDemo3,
  projectDemo4,
} = projectImages;

const projects = [
  {
    id: 1,
    name: "tea project",
    language: "react",
    description: "",
    image: projectTea,
    url: "projects.html",
  },
  {
    id: 2,
    name: "Github User Search Project",
    language: "react",
    description:
      "Search for your favoutrite user on the github site. The app make use of the github API to search the users in the database",
    image: projectGithub,
    url: "https://fabian-portfolio-react-github-users.netlify.app/login",
  },
  {
    id: 3,
    name: "Tours Project",
    language: "react",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image: projectDemo3,
    url: "",
  },
  {
    id: 4,
    name: "comfy-sloth",
    language: "react",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo2,
    url: "",
  },
  {
    id: 5,
    name: "comfy-sloth",
    language: "react",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo2,
    url: "",
  },
  {
    id: 6,
    name: "comfy-sloth",
    language: "javascript",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo3,
    url: "",
  },
  {
    id: 7,
    name: "comfy-sloth",
    language: "gatsby",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo4,
    url: "",
  },
  {
    id: 8,
    name: "comfy-sloth",
    language: "next",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo1,
    url: "",
  },
];

export default projects;
