import React from "react";
import styled from "styled-components";
import { themeIcons } from "../assets/images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSelector = () => {
  const { faSun, faMoon } = themeIcons;
  return (
    <Wrapper>
      <div className="theme">
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .theme {
    visibility: hidden;
  }

  @media screen and (min-width: 768px) {
    .theme {
      position: absolute;
      visibility: visible;
      top: 5%;
      right: 0;
      padding: 2rem;
      color: var(--clr-white);
      display: flex;
      font-size: 1.5rem;
      gap: 2.5rem;

      /* border: var(--border-white); */
    }
  }
`;

export default ThemeSelector;
