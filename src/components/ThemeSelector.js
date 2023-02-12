import React from "react";
import styled from "styled-components";
import { themeIcons } from "../assets/images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../ContextAPI";

const ThemeSelector = () => {
  const { theme, setTheme } = useGlobalContext();
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
  }

  .theme:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;

export default ThemeSelector;
