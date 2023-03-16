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
          <FontAwesomeIcon
            className="icon"
            icon={faMoon}
            onClick={handleClick}
          />
        ) : (
          <FontAwesomeIcon icon={faSun} onClick={handleClick} />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .theme {
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    background-color: var(--clr-primary-2);
  }

  .icon {
    justify-content: center;
  }

  .theme:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .theme {
      top: 1.5%;
      position: fixed;
      right: 1.5%;
    }
  }
`;

export default ThemeSelector;
