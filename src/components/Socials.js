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

  .icon {
    transition: all 0.15s ease-in;
    color: var(--clr-white);
  }

  .social-icon {
    animation: colorAnimation 1000ms steps(5);
  }

  .icon:hover {
    transform: scale(1.1);
    color: var(--clr-yellow);
    transform: translateY(-2.5px);
  }

  @keyframes colorAnimation {
    to {
      left: 100%;
      color: var(--clr-yellow);
    }
  }
`;

export default Socials;
