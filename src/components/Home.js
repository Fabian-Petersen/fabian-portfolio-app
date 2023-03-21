// import { useInView } from "react-intersection-observer";
import Wrapper from "../styleWrappers/styleHome";
// import cv from "../assets/documents/fabian-petersen-12.2022-v1.pdf";
import { useGlobalContext } from "../ContextAPI";
import { motion } from "framer-motion";
import homeVariants from "../animations/homeAnimate";
import {
  Navbar,
  SideBar,
  SocialsHover,
  ScrollToTop,
  SocialGroup,
} from "../components/index.js";

const [containerVariants, animateLine, buttonVariants] = homeVariants;

const Home = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <Navbar />
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
            <motion.div className="home-btns" variants={buttonVariants}>
              {/* <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="btn btn-1"
              >
                Download CV
              </a> */}
              <a href={"/projects"} className="btn-projects">
                My Projects
              </a>
            </motion.div>
            <SocialsHover />
          </article>
        </div>
      </motion.header>
      <ScrollToTop />
    </Wrapper>
  );
};

export default Home;
