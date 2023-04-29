// import { useInView } from "react-intersection-observer";
import Wrapper from "../styleWrappers/styleHome";
// import cv from "../assets/documents/fabian-petersen-12.2022-v1.pdf";
import { useGlobalContext } from "../ContextAPI";
import { motion } from "framer-motion";
import homeVariants from "../animations/homeAnimate";
import { Outlet } from "react-router-dom";
import {
  SideBar,
  //SocialsHover,
  // ScrollToTop,
  SocialGroup,
  Motivation,
  SocialsAnimation,
} from "../components/index.js";

const [containerVariants, animateLine, buttonVariants] = homeVariants;

const Home = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <Wrapper>
      {openSidebar && (
        <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      )}
      <SocialGroup />
      <motion.header
        className="hero section"
        id="home"
        variants={containerVariants}
        initial="initialState"
        animate="animateState"
      >
        <div className="section-center hero-center">
          <article className="hero-info">
            <motion.div
              className="underline"
              variants={animateLine}
            ></motion.div>
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
            <SocialsAnimation />
            <Motivation />
            <Outlet />
          </article>
        </div>
      </motion.header>
    </Wrapper>
  );
};

export default Home;
