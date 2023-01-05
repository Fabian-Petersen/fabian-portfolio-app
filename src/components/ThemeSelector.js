import React from "react";
import styled from "styled-components";
import { themeIcons } from "../assets/images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSelector = ({ theme, setTheme }) => {
  const handleClick = () => {
    setTheme(!theme);
  };

  const { faSun, faMoon } = themeIcons;
  return (
    <Wrapper>
      <div className="theme">
        {theme ? (
          <FontAwesomeIcon icon={faSun} onClick={handleClick} />
        ) : (
          <FontAwesomeIcon icon={faMoon} onClick={handleClick} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .theme {
    color: var(--clr-white);
    font-size: 1.8rem;
    margin-left: auto;
    /* border: var(--border-white); */
  }

  .theme:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;

export default ThemeSelector;
