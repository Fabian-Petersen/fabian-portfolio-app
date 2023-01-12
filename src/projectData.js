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
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["React", "HTML", "CSS", "styled components"],
    },
  },
  {
    id: 2,
    name: "Github Users Project",
    language: "react",
    description:
      "Search for your favoutrite user on the github site. The app make use of the github API to search the users in the database",
    image: projectGithub,
    url: "https://fabian-portfolio-react-github-users.netlify.app/login",
    code: "https://github.com/fabian-petersen/react-github-users-search-app.git",
    singlePage: {
      description:
        "In this project i used the Github API to get the information of the users.",
      images: "",
      skills: [
        "React",
        "HTML",
        "CSS",
        "React Router V6",
        "axios",
        "styled components",
      ],
    },
  },
  {
    id: 3,
    name: "Tours Project",
    language: "javascript",
    description:
      "Search for your favoutrite destination and book with us for a memorable holiday.",
    image: projectTours,
    url: "",
    code: "https://github.com/fabian-petersen/natours",
    singlePage: {
      description:
        "The project does not use any framework e.g. React. The project was created in in my early stages as a developer to learn vanilla sematic HTML, CSS (with SCSS) and JavaScript.",
      images: "",
      skills: ["HTML", "CSS", "SASS"],
    },
  },
  {
    id: 4,
    name: "Tea Site Project",
    language: "react",
    description: "The most exquisite tea range in the world",
    image: projectTea,
    url: "",
    code: "https://github.com/Fabian-Petersen/tea-shop-app",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["React", "HTML", "CSS", "Styled Components"],
    },
  },
  {
    id: 5,
    name: "comfy-sloth",
    language: "react",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo4,
    url: "",
    code: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: [
        "React",
        "HTML",
        "CSS",
        "React Router v6",
        "Styled Components",
        "Redux",
      ],
    },
  },
  {
    id: 6,
    name: "Weather App",
    language: "javascript",
    description: "Weather App using Javascript and the OpenWeather API",
    image: projectDemo4,
    url: "",
    code: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["React", "HTML", "CSS"],
    },
  },
  {
    id: 7,
    name: "Calculator",
    language: "javascript",
    description: "Build a calculator using Javascript",
    image: projectDemo4,
    url: "",
    code: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["React", "HTML", "CSS"],
    },
  },
  {
    id: 8,
    name: "Coming Soon",
    language: "javascript",
    description: "Random e-commerce store for your favourite items",
    image: projectDemo3,
    url: "",
    code: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["React", "HTML", "CSS"],
    },
  },
  {
    id: 9,
    name: "Coming Soon",
    language: "javascript",
    description: "",
    image: projectDemo3,
    url: "",
    code: "",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: ["React", "HTML", "CSS"],
    },
  },
];

export default projects;
