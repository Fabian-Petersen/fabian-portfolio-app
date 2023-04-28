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
  const [visible, setVisible] = useState(false);
  const [motivationPosition, setMotivationPosition] = useState(0);
  const [motivationVisible, setMotivationVisible] = useState(true);

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
        visible,
        setVisible,
        motivationPosition,
        setMotivationPosition,
        motivationVisible,
        setMotivationVisible,
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
