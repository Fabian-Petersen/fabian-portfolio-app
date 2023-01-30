import { projectImages } from "./assets/images/index.js";

const {
  html,
  css,
  javascript,
  react,
  sass,
  github,
  redux,
  bootstrap,
  figma,
  visualStudioCode,
  api,
  responsive,
} = projectImages;

const skills = [
  {
    id: "figma",
    icon: figma,
    node: "UI/UX Design",
  },

  {
    id: "html",
    icon: html,
    node: "frontEnd",
  },
  {
    id: "css",
    icon: css,
    node: "frontEnd",
  },
  {
    id: "javaScript",
    icon: javascript,
    node: "frontEnd",
  },
  {
    id: "react",
    icon: react,
    node: "frontEnd",
  },
  {
    id: "github",
    icon: github,
    node: "other",
  },
  {
    id: "bootstrap",
    icon: bootstrap,
    node: "other",
  },
  {
    id: "sass",
    icon: sass,
    node: "other",
  },
  {
    id: "redux",
    icon: redux,
    node: "frontEnd",
  },
  {
    id: "Visual Studio Code",
    icon: visualStudioCode,
    node: "other",
  },
  {
    id: "RESTful API",
    icon: api,
    node: "frontEnd",
  },
  {
    id: "responsive",
    icon: responsive,
    node: "UI/UX Design",
  },
];

export default skills;
