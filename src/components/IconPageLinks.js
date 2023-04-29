import links from "../pageLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../styleWrappers/styleIconPageLinks";
import { NavLink } from "react-router-dom";

const IconPageLinks = () => {
  return (
    <Wrapper>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, href, icon, className } = link;
          return (
            <li className={className} key={id}>
              <NavLink
                to={href}
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                <FontAwesomeIcon icon={icon} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default IconPageLinks;
