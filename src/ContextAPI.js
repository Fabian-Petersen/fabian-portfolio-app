import React, { useState, useContext, createContext } from "react";
import projects from "./projectData";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [projectMenu, setProjectMenu] = useState(projects);
  const [buttonCategory, setButtonCategory] = useState([]);
  const [activeButton, setActiveButton] = useState(" ");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [theme, setTheme] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollNav, setShowScrollNav] = useState(false);

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
        buttonCategory,
        setButtonCategory,
        showScrollNav,
        setShowScrollNav,
        scrollPosition,
        setScrollPosition,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
