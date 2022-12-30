import React from "react";
import styled from "styled-components";
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

const Wrapper = styled.div`
  .social-icons {
    margin-bottom: 1.5rem;
    display: flex;
    font-size: 2rem;
    gap: 2rem;
  }

  .social-icon {
    transition: all 0.15s ease-in;
    color: var(--clr-white);
    border: var(--border-red);
  }

  .social-icon:hover {
    transform: scale(1.1);
    color: var(--clr-yellow);
    transform: translateY(-2.5px);
  }

  li {
    position: relative;
  }

  .icon::after,
  .icon::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* background: blue; */
  }

  .icon::after {
    background-color: white;
    animation: pulse 1000ms infinite;
  }

  .social-icon::before {
    /* background-color: white; */
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0;
    }

    100% {
      transform: scale(1.3);
      opacity: 1;
    }
  }
`;

export default Socials;
