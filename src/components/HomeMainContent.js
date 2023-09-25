import Wrapper from "../styleWrappers/styleHome";
import { motion } from "framer-motion";

const HomeMainContent = ({ buttonVariants, animateLine }) => {
  return (
    <Wrapper>
      <article className="hero-info">
        <motion.div className="underline" variants={animateLine}></motion.div>
        <h3>Hi, my name is</h3>
        <h1>
          <span>Fabian </span>Petersen.
        </h1>
        <p className="hero-sub-heading">
          Welcome to my official portfolio website showcasing my work as a
          <span> Front End Developer.</span>
        </p>
        <motion.div className="btn-container" variants={buttonVariants}>
          <a href={"/projects"} className="btn btn-projects">
            My Projects
          </a>
        </motion.div>
      </article>
    </Wrapper>
  );
};

export default HomeMainContent;
