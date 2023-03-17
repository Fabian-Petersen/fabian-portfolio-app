import links from "../pageLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../styleWrappers/styleIconPageLinks";

const IconPageLinks = () => {
  return (
    <Wrapper>
      <ul className="nav-links">
        {links.map((link) => {
          const { id, href, icon, className } = link;
          return (
            <li className={className} key={id}>
              <a href={href}>
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default IconPageLinks;
