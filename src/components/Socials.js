import Wrapper from "../styleWrappers/styleSocials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "../socialsData";

const Socials = () => {
  return (
    <Wrapper>
      <div>
        <ul className="social-icons">
          {links.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <FontAwesomeIcon icon={icon} className="icon" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Socials;
