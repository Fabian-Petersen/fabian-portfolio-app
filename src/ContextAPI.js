import React, { useState, useContext, createContext } from "react";
import projects from "./projectData";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [initialState, setInitialState] = useState(projects);
  const [filtered, setFiltered] = useState(projects);
  const [active, setActive] = useState(" ");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [theme, setTheme] = useState(true);

  return (
    <AppContext.Provider
      value={{
        initialState,
        setInitialState,
        filtered,
        setFiltered,
        active,
        setActive,
        openSidebar,
        setOpenSidebar,
        theme,
        setTheme,
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
