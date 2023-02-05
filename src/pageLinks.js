// { id: "https://fabian-portfolio.netlify.app/", name: "Home" }
import { navIcons } from "./assets/images/icons";
const { house, user, clipboard, phone } = navIcons;

const links = [
  { id: 1, href: "/#home", section: "home", icon: house },
  { id: 2, href: "#about", section: "about", icon: user },
  { id: 3, href: "#projects", section: "projects", icon: clipboard },
  { id: 4, href: "#contact", section: "contact", icon: phone },
];

export default links;
