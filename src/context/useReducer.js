import { useReducer, createContext, useContext } from "react";
import { FILTER_PROJECTS, OPEN_SIDEBAR, TOGGLE_THEME } from "./actions";
import reducer from "./reducer";
import projects from "../projectData";

const initialState = {
  openSideBar: false,
  toggleTheme: true,
  projectMenu: projects,
};

const AppContext = createContext();

const Reducer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSideBar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const filterProjects = () => {
    dispatch({ type: FILTER_PROJECTS });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSideBar,
        toggleTheme,
        filterProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useReducerContext = () => {
  return useContext(AppContext);
};

export default Reducer;
