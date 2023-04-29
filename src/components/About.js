// import styled from "styled-components";
import Wrapper from "../styleWrappers/styleAbout";
import skills from "../skillsData";
import { motion } from "framer-motion";
import aboutVariants from "../animations/aboutAnimate";
// import { useActiveMenu } from "react-active-menu";
const uniqueSkill = [...new Set(skills.map((item) => item.node))];
const [container, item, skillsContainer] = aboutVariants;

const About = () => {
  // const { registerSection } = useActiveMenu({
  //   smooth: true,
  // });

  return (
    <Wrapper>
      <motion.section
        className="section about"
        id="about"
        variants={container}
        initial="initialState"
        whileInView="animateState"
        // ref={registerSection("about")}
      >
        <motion.div className="section-title" variants={item}>
          <h2 id="testing">About Me</h2>
          <div className="underline"></div>
        </motion.div>
        {/* <!-- end of section title --> */}
        <motion.div className="section-center about-center" variants={item}>
          {/* <!-- about info --> */}
          <article className="about-info">
            <p>
              I'm a chemical engineer and throughout my career I worked on
              various software implementation projects with TotalEnergies.
              Through this exposure I fell in love with the development of apps
              myself and today I'm a passionate React Developer.
              <br />
              <br /> As a developer I love to learn new technologies and to
              build exciting projects. Below is a list (and growing) of
              technologies I have worked with thus far.
            </p>
            <h3 className="heading-mySkills">My Skills</h3>
            <div className="skills-container">
              {uniqueSkill.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="each-skill"
                    variants={skillsContainer}
                  >
                    <h3 className="each-skill-heading">{skill}</h3>
                    <motion.div
                      className="each-skill-container"
                      variants={skill}
                    >
                      {skills
                        .filter((item) => item.node === skill)
                        .map((item, i) => {
                          const { id, icon, styling } = item;
                          return (
                            <motion.div
                              key={id}
                              className="container"
                              initial={{ opacity: 0, y: "-200" }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: i * 0.4,
                                type: "spring",
                              }}
                            >
                              <div className={`icon-container ${styling}`}>
                                <img
                                  className="each-skill-icon"
                                  src={icon}
                                  alt={id}
                                />
                              </div>
                              <p className="icon-name">{id}</p>
                            </motion.div>
                          );
                        })}
                    </motion.div>
                    <hr className="divideLine" />
                  </div>
                );
              })}
            </div>
          </article>
        </motion.div>
      </motion.section>
    </Wrapper>
  );
};

export default About;
