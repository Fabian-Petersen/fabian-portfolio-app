import links from "../pageLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../styleWrappers/styleIconPageLinks";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import iconPageLinksVariants from "../animations/iconPageLinksAnimate";

const IconPageLinks = () => {
  const [parentContainer, childContainer] = iconPageLinksVariants;
  return (
    <Wrapper>
      <motion.ul
        className="nav-links"
        variants={parentContainer}
        initial="initialState"
        animate="animateState"
      >
        {links.map((link) => {
          const { id, href, icon, className } = link;
          return (
            <motion.li className={className} key={id} variants={childContainer}>
              <NavLink
                to={href}
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                <FontAwesomeIcon icon={icon} />
              </NavLink>
            </motion.li>
          );
        })}
      </motion.ul>
    </Wrapper>
  );
};
export default IconPageLinks;
