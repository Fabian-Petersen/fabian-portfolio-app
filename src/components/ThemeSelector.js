import React, { useEffect } from "react";
import Wrapper from "../styleWrappers/styleThemeSelector";
import { themeIcons } from "../assets/icons";
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

export default ThemeSelector;
