import Wrapper from "../styleWrappers/styleFilterButtons";
import { useGlobalContext } from "../ContextAPI";
import projects from "../projectData";
import { motion } from "framer-motion";
import buttonVariants from "../animations/projectPage/filterButtonsAnimate";

const FilterButtons = () => {
  const { setProjectMenu, activeButton, setActiveButton } = useGlobalContext();
  const [parentContainer, childContainer] = buttonVariants;

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
      <motion.div
        className="btn-container section-center"
        variants={parentContainer}
        initial="initialState"
        animate="animateState"
      >
        {uniqueValues.map((item, index) => {
          return (
            <motion.button
              variants={childContainer}
              key={index}
              className={
                activeButton === item
                  ? "btn btn-1 project-btn active"
                  : "btn btn-1 project-btn"
              }
              onClick={handleClick(item)}
            >
              {item}
            </motion.button>
          );
        })}
        <motion.button
          className="btn btn-1"
          id="project-btn-all"
          onClick={reset}
          variants={childContainer}
        >
          All
        </motion.button>
      </motion.div>
    </Wrapper>
  );
};

export default FilterButtons;
