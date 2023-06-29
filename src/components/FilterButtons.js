import Wrapper from "../styleWrappers/styleFilterButtons";
import { useGlobalContext } from "../ContextAPI";
import projects from "../projectData";
import { motion } from "framer-motion";
import buttonVariants from "../animations/projectPage/filterButtonsAnimate";

const FilterButtons = () => {
  const { setProjectMenu, activeButton, setActiveButton } = useGlobalContext();
  const [parentContainer, childContainer] = buttonVariants;

  // Filter out the projects that match the language of the button and set the active class to higlight the button
  const handleClick = (lang) => () => {
    setActiveButton(lang);
    const filteredProjects = projects.filter(
      (project) => project.language === lang
    );

    setProjectMenu(filteredProjects);
  };

  // Display all the projects once ALL button clicked
  const reset = () => {
    setProjectMenu(projects);
    setActiveButton(" ");
  };

  // Filter out the program languages returned from the projects data that was used in projects.
  const usedLanguages = [
    ...new Set(projects.map((project) => project.language)),
  ];

  return (
    <Wrapper>
      <motion.div
        className="btn-container section-center"
        variants={parentContainer}
        initial="initialState"
        animate="animateState"
      >
        {usedLanguages.map((language, index) => {
          return (
            <motion.button
              variants={childContainer}
              key={index}
              className={
                activeButton === language
                  ? "btn btn-1 project-btn active"
                  : "btn btn-1 project-btn"
              }
              onClick={handleClick(language)}
            >
              {language}
            </motion.button>
          );
        })}
        <motion.button
          className="btn btn-1 project-btn"
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
