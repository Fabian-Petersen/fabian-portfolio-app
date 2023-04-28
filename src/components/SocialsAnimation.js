import Wrapper from "../styleWrappers/styleSocialAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const SocialsAnimation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <ul className="container">
        {active ? (
          <li className="xmark">
            <a href="#1">
              <FontAwesomeIcon icon={faXmark} onClick={handleClick} />
            </a>
          </li>
        ) : (
          <li className="ellipsis" onClick={handleClick}>
            <a href="#1">
              <FontAwesomeIcon icon={faEllipsis} />
            </a>
          </li>
        )}
        <a href="#1">
          <li className={active ? "facebookOpen" : "facebookClose"}>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </a>
        <a href="#1">
          <li className={active ? "linkedInOpen" : "linkedInClose"}>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
        </a>
        <a href="#1">
          <li className={active ? "twitterOpen" : "twitterClose"}>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
        </a>
        <a href="#1">
          <li className={active ? "gitHubOpen" : "gitHubClose"}>
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </a>
      </ul>
    </Wrapper>
  );
}

export default SocialsAnimation
