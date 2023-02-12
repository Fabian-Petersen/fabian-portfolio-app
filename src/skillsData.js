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
    styling: "figma",
  },

  {
    id: "html",
    icon: html,
    node: "frontEnd",
    styling: "html",
  },
  {
    id: "css",
    icon: css,
    node: "frontEnd",
    styling: "css",
  },
  {
    id: "javascript",
    icon: javascript,
    node: "frontEnd",
    styling: "javascript",
  },
  {
    id: "react",
    icon: react,
    node: "frontEnd",
    styling: "react",
  },
  {
    id: "github",
    icon: github,
    node: "other",
    styling: "github",
  },
  {
    id: "bootstrap",
    icon: bootstrap,
    node: "other",
    styling: "bootstrap",
  },
  {
    id: "sass",
    icon: sass,
    node: "other",
    styling: "sass",
  },
  {
    id: "redux",
    icon: redux,
    node: "frontEnd",
    styling: "figma",
  },
  {
    id: "visualstudiocode",
    icon: visualStudioCode,
    node: "other",
    styling: "vsc",
  },
  {
    id: "RESTful API",
    icon: api,
    node: "frontEnd",
    styling: "api",
  },
  {
    id: "responsive",
    icon: responsive,
    node: "UI/UX Design",
    styling: "responsive",
  },
];

export default skills;
