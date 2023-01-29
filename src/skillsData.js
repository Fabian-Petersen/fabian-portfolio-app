import { projectImages } from "./assets/images/index.js";

const { html, css, javascript, react, sass, github, redux, bootstrap, figma } =
  projectImages;

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
    node: "Other",
  },
  {
    id: "bootstrap",
    icon: bootstrap,
    node: "Other",
  },
  {
    id: "sass",
    icon: sass,
    node: "Other",
  },
  {
    id: "redux",
    icon: redux,
    node: "frontEnd",
  },
];

export default skills;
