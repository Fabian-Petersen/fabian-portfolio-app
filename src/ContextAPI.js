import React, { useState, useContext, createContext } from "react";
import projects from "./projectData";
import { useInView } from "react-intersection-observer";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { ref, inView } = useInView();
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
        ref,
        inView,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
