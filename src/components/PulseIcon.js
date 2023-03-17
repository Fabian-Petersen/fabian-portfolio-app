import Wrapper from "../styleWrappers/stylePulseIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PulseIcon = ({ code, url }) => {
  return (
    <Wrapper>
      <div className="project-container">
        <div className="container">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="project-code-link"
          >
            <div className="pulse">
              <FontAwesomeIcon
                icon={faGlobe}
                className="code-icon"
                onClick={() => console.log({ url })}
              />
            </div>
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="project-code-link"
          >
            <div className="pulse">
              <FontAwesomeIcon
                icon={faGithub}
                className="code-icon"
                onClick={() => console.log({ url })}
              />
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default PulseIcon;
