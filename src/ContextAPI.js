import React, { useState, useContext, createContext } from "react";
import projects from "./projectData";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [projectMenu, setProjectMenu] = useState(projects);
  const [buttonCategory, setButtonCategory] = useState([]);
  const [activeButton, setActiveButton] = useState(" ");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [theme, setTheme] = useState("dark-theme");
  const [toggleTheme, setToggleTheme] = useState(true);

  return (
    <AppContext.Provider
      value={{
        projects,
        projectMenu,
        setProjectMenu,
        activeButton,
        setActiveButton,
        openSidebar,
        setOpenSidebar,
        theme,
        setTheme,
        toggleTheme,
        setToggleTheme,
        buttonCategory,
        setButtonCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
