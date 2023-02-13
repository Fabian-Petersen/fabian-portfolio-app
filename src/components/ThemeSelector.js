import React, { useEffect } from "react";
import styled from "styled-components";
import { themeIcons } from "../assets/images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../ContextAPI";

const ThemeSelector = () => {
  const { theme, setTheme, toggleTheme, setToggleTheme } = useGlobalContext();

  const handleClick = () => {
    setToggleTheme(!toggleTheme);
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const { faSun, faMoon } = themeIcons;
  return (
    <Wrapper>
      <div className="theme">
        {toggleTheme ? (
          <FontAwesomeIcon icon={faMoon} onClick={handleClick} />
        ) : (
          <FontAwesomeIcon icon={faSun} onClick={handleClick} />
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
