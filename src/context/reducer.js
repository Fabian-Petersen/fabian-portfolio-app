import { OPEN_SIDEBAR, TOGGLE_THEME, FILTER_PROJECTS } from "./actions";
import projects from "../projectData";

const reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, openSideBar: true };
  }

  if (action.type === TOGGLE_THEME) {
    return { ...state, toggleTheme: false };
  }

  if (action.type === FILTER_PROJECTS) {
    const filterProjects = (lang) => () => {
      // setActiveButton(lang);
      const filteredProjects = projects.filter(
        (project) => project.language === lang
      );
    };
    return { ...state, toggle: false, filterProjects };
  }
  //   return Error
  throw new Error(`no matching ${action.type} action`);
};

export default reducer;
