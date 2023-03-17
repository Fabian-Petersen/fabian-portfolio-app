import Wrapper from "../styleWrappers/styleFilterButtons";
import { useGlobalContext } from "../ContextAPI";
import projects from "../projectData";

const FilterButtons = () => {
  const { setProjectMenu, activeButton, setActiveButton } = useGlobalContext();

  const handleClick = (lang) => () => {
    setActiveButton(lang);
    const filteredProjects = projects.filter(
      (project) => project.language === lang
    );

    setProjectMenu(filteredProjects);
  };

  const reset = () => {
    setProjectMenu(projects);
    setActiveButton(" ");
  };

  const uniqueValues = [...new Set(projects.map((item) => item.language))];
  return (
    <Wrapper>
      <div className="btn-container section-center">
        {uniqueValues.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeButton === item
                  ? "btn btn-1 project-btn active"
                  : "btn btn-1 project-btn"
              }
              onClick={handleClick(item)}
            >
              {item}
            </button>
          );
        })}
        <button className="btn btn-1" id="project-btn-all" onClick={reset}>
          All
        </button>
      </div>
    </Wrapper>
  );
};

export default FilterButtons;
