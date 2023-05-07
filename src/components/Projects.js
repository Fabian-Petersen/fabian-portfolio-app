import Wrapper from "../styleWrappers/styleProjects";
import { FilterButtons, PulseIcon } from "../components/index.js";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../ContextAPI";
import { motion, AnimatePresence } from "framer-motion";
import projectVariants from "../animations/projectPage/projectAnimate";
import headingVariants from "../animations/pageHeadingAnimate";

const Projects = () => {
  const { projectMenu } = useGlobalContext();
  const [parentContainer, childContainer] = projectVariants;
  const [parentContainerHeading, childContainerHeading] = headingVariants;
  return (
    <Wrapper>
      <section className="section projects" id="projects">
        <motion.div
          className="section-title"
          variants={parentContainerHeading}
          initial="initialState"
          animate="animateState"
          exit="exit"
          layout
        >
          <motion.h2
            variants={childContainerHeading}
            initial="initialState"
            animate="animateState"
          >
            Projects
          </motion.h2>
          <motion.div
            className="underline"
            variants={childContainerHeading}
          ></motion.div>
        </motion.div>
        <motion.p
          className="projects-text"
          variants={""}
          initial="initialState"
          animate="animateState"
        >
          My latest completed projects
        </motion.p>
        <FilterButtons className="filterButtons" />
        <motion.div
          className="section-center projects-center"
          variants={parentContainer}
          initial="initialState"
          animate="animateState"
          exit="exit"
          layout
        >
          {projectMenu.map((item) => {
            const { id, name, language, image, code, url } = item;
            return (
              <AnimatePresence>
                <motion.div
                  className="project-card"
                  key={id}
                  variants={childContainer}
                >
                  <img src={image} alt={name} className="project-img" />
                  <div className="card-body">
                    <Link to={`/projects/${id}`}>
                      <h4 className="project-title">{name}</h4>
                    </Link>
                    <p>Designed with {language}</p>
                    <PulseIcon code={code} url={url} />
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </section>
    </Wrapper>
  );
};

export default Projects;
