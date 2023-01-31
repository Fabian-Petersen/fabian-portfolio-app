// { id: "https://fabian-portfolio.netlify.app/", name: "Home" }
import { navIcons } from "./assets/images/icons";
const { house, user, clipboard, phone } = navIcons;

const links = [
  { id: "/#home", name: "Home", icon: house },
  { id: "/#about", name: "About", icon: user },
  { id: "/#projects", name: "Projects", icon: clipboard },
  { id: "/#contact", name: "Contact", icon: phone },
];

export default links;
