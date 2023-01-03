import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "../socialsData";

const SocialsHover = () => {
  return (
    <Wrapper>
      <div>
        <ul className="social-icons">
          {links.map((link) => {
            const { id, url, icon, name } = link;
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
                    <FontAwesomeIcon icon={icon} className="icon" />
                  </div>
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
  }

  .icon-container {
    display: flex;
    min-width: 5rem;
    flex-direction: column;
    justify-content: center;
  }

  .icon-container:hover .tooltip {
    animation: tooltipAnimation 200ms forwards;
  }

  .tooltip {
    position: relative;
    font-size: 1rem;
    top: 0;
    color: blue;
    opacity: 0;
    background: var(--clr-white);
    padding: 0.2rem 0.5rem;
    border-radius: 10rem;
    margin-bottom: 0.2rem;
    text-transform: capitalize;

    .tooltip__point {
      position: absolute;
      background-color: var(--clr-white);
      color: red;
      width: 0.8rem;
      z-index: -1;
      height: 0.8rem;
      left: 40%;
      top: 65%;
      transform: translate(-50%, -50%);
      transform: rotate(-45deg);
    }
    text-align: center;
  }

  .icon {
    font-size: 2rem;
    padding-top: 0.5rem;
    position: relative;
    color: var(--clr-white);
  }

  .icon:hover {
    transform: scale(1.1);
    transform: translateY(-2.5px);
    color: var(--clr-yellow);
  }

  @keyframes tooltipAnimation {
    from {
      top: 60px;
    }

    to {
      opacity: 1;
    }
  }
`;

export default SocialsHover;
