// import { useInView } from "react-intersection-observer";
import Wrapper from "../styleWrappers/styleHome";
// import cv from "../assets/documents/fabian-petersen-12.2022-v1.pdf";
import { useGlobalContext } from "../ContextAPI";
import { motion } from "framer-motion";
import homeVariants from "../animations/homeAnimate";

// import { Outlet } from "react-router-dom";
import {
  SideBar,
  //SocialsHover,
  // ScrollToTop,
  // SocialGroup,
  Motivation,
  SocialsAnimation,
  // IconPageLinks,
  HomeMainContent,
} from "../components/index.js";

const [containerVariants, animateLine, buttonVariants] = homeVariants;

const Home = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <Wrapper>
      {openSidebar && (
        <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      )}
      <motion.header
        className="section-center section"
        variants={containerVariants}
        initial="initialState"
        animate="animateState"
      >
        {/* <SocialGroup /> */}
        <SocialsAnimation />
        <HomeMainContent
          animateLine={animateLine}
          buttonVariants={buttonVariants}
        />
      </motion.header>
      <Motivation />
    </Wrapper>
  );
};

export default Home;
