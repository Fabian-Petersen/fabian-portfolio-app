import { projectImages } from "./assets/images/index.js";

const {
  projectCockTails,
  projectGithub,
  projectTours,
  projectTea,
  projectDemo3,
  projectDemo4,
} = projectImages;

const projects = [
  {
    id: 1,
    name: "cocktail project",
    language: "react",
    description: "Everything you need to know about your favourite cocktail",
    image: projectCockTails,
    url: "https://fabian-portfolio-cocktail-project.netlify.app",
    code: "https://github.com/fabian-petersen/cocktail-api-project",
  },
  {
    id: 2,
    name: "Github User Search Project",
    language: "react",
    description:
      "Search for your favoutrite user on the github site. The app make use of the github API to search the users in the database",
    image: projectGithub,
    url: "https://fabian-portfolio-react-github-users.netlify.app/login",
    code: "https://github.com/fabian-petersen/react-github-users-search-app.git",
  },
  {
    id: 3,
    name: "Tours Project",
    language: "react",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image: projectTours,
    url: "",
    code: "https://github.com/fabian-petersen/natours",
  },
  {
    id: 4,
    name: "Tea Site Project",
    language: "react",
    description: "The most exquisite tea range in the world",
    image: projectTea,
    url: "",
    code: "https://github.com/Fabian-Petersen/tea-shop-app",
  },
  {
    id: 5,
    name: "comfy-sloth",
    language: "react",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo4,
    url: "",
    code: "",
  },
  {
    id: 6,
    name: "Weather App",
    language: "javascript",
    description: "Weather App using Javascript and the OpenWeather API",
    image: projectDemo4,
    url: "",
    code: "",
  },
  {
    id: 7,
    name: "Calculator",
    language: "javascript",
    description: "Build a calculator using Javascript",
    image: projectDemo4,
    url: "",
    code: "",
  },
  {
    id: 8,
    name: "Coming Soon",
    language: "javascript",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo3,
    url: "",
    code: "",
  },
];

export default projects;
