import { projectImages } from "./assets/images/index.js";
//import skills from "./skillsData";

//const { icon } = skills;

const {
  projectCockTails,
  projectGithub,
  projectTours,
  projectTea,
  //projectDemo3,
  projectDemo4,
  html,
  css,
  javascript,
  react,
  sass,
  github,
  //redux,
  //bootstrap,
  comingSoon,
} = projectImages;

const projects = [
  {
    id: 1,
    name: "cocktail library",
    language: "react",
    description: "Everything you need to know about your favourite cocktail",
    image: projectCockTails,
    url: "https://fabian-portfolio-cocktail-project.netlify.app",
    code: "https://github.com/fabian-petersen/cocktail-api-project",
    singlePage: {
      description:
        "In this project i used the xxxxxxxx API to get the information of the cocktails. The app render the cocktail information with each cocktail making use of a dynamic single page information about the cocktail you selected.",
      images: "",
      skills: [html, css, javascript, react, github],
    },
  },
  {
    id: 2,
    name: "Github Users",
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
      skills: [html, css, javascript, react],
    },
  },
  {
    id: 3,
    name: "Creative Tours",
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
      skills: [html, css, javascript, sass, github],
    },
  },
  {
    id: 4,
    name: "Tea Brewery",
    language: "react",
    description: "The most exquisite tea range in the world",
    image: projectTea,
    url: "https://tea-brewery.netlify.app/",
    code: "https://github.com/Fabian-Petersen/tea-shop-app",
    singlePage: {
      description:
        "This is the first and most basic website I have build with React. All the data is stored within array objects and mapped over to display the different sections based on the hardcoded data. The css are done with styled components with fairly basic animations e.g. text movement in the X directions, object scaling and background image tranisioning over the product cards. The section id's was used to navigate bewteen the pages",
      images: "",
      skills: [html, css, javascript, react, github],
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
      // skills: [html, css, javascript, react, github, redux],
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
      skills: [html, css, javascript, react, github],
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
      skills: [html, css, javascript, github],
    },
  },
  {
    id: 8,
    name: "Vehicle Booking App",
    language: "react",
    description:
      "Booking App for the department of transport - University of the Western Cape",
    image: comingSoon,
    url: "",
    code: "",
    singlePage: {
      description:
        "In this project i used the Supabase Backend API with a PostgresSQL Database",
      images: "",
      skills: [html, css, javascript, react, github],
    },
  },
];

export default projects;
