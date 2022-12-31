import React from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PulseIcon = ({ code }) => {
  return (
    <Wrapper>
      <div className="project-container">
        <div className="container">
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="project-code-link"
          >
            <div className="pulse">
              <FontAwesomeIcon icon={faGithub} className="code-icon" />
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .project-container {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .container {
    position: absolute;
    left: 50%;
    top: 60%;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .project-code-link {
    //Change this back to 0 hide the icon
    opacity: 0;
  }

  .project-container:hover .project-code-link {
    opacity: 1;
    color: yellow;
  }

  .pulse {
    position: relative;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  .code-icon {
    position: relative;
    color: white;
    font-size: 2rem;
    color: var(--clr-white);
    /* transform: translateX(1px); */
  }

  .pulse::before,
  .pulse::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .code-icon:hover {
    cursor: pointer;
    color: var(--clr-yellow);
    opacity: 1;
  }

  .pulse:hover::after {
    animation: pulse 850ms infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(0.8);
      outline: 5px solid var(--clr-yellow);
    }

    100% {
      opacity: 0;
      transform: scale(1.5);
      outline: 0px solid yellow;
    }
  }
`;

export default PulseIcon;
