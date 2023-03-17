import Wrapper from "../styleWrappers/styleSocialsHover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "../socialsData";

const SocialsHover = () => {
  return (
    <Wrapper>
      <ul className="social-icons">
        {links.map((link) => {
          const { id, url, icon, name, color } = link;
          return (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <div className="icon-container">
                  <div className="tooltip">
                    {name}
                    <div className="tooltip__point"></div>
                  </div>
                  <FontAwesomeIcon icon={icon} className="icon" color={color} />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default SocialsHover;
