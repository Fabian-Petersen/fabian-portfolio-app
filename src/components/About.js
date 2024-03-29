// import styled from "styled-components";
import Wrapper from "../styleWrappers/styleAbout";
import skills from "../skillsData";
import { motion } from "framer-motion";
import aboutVariants from "../animations/aboutAnimate";
import headingVariants from "../animations/pageHeadingAnimate";

const uniqueSkill = [...new Set(skills.map((item) => item.node))];

const [
  skillsParentContainer,
  skillsChildContainer,
  skillsHeading,
  headingMySkills,
  // skillsIconName,
  aboutInfo,
  lineVariant,
] = aboutVariants;

const [parentContainerHeading, childContainerHeading] = headingVariants;

const About = () => {
  return (
    <Wrapper>
      <section
        className="section section-center"
        id="about"
        // variants={""}
        // initial="initialState"
        // whileInView="animateState"
        // ref={registerSection("about")}
      >
        <motion.div
          className="section-title"
          variants={parentContainerHeading}
          initial="initialState"
          animate="animateState"
        >
          <motion.h2 id="testing" variants={childContainerHeading}>
            About Me
          </motion.h2>
          <motion.div
            className="underline"
            variants={childContainerHeading}
          ></motion.div>
        </motion.div>
        {/* <!-- end of section title --> */}
        <motion.div variants={""}>
          {/* <!-- about info --> */}
          <article className="about-info">
            <motion.p
              variants={aboutInfo}
              initial="initialState"
              animate="animateState"
            >
              My journey began as a chemical engineer, during which I was
              involved in several software implementation projects with
              TotalEnergies. This experience sparked my interest in app
              development, and I eventually transitioned into a dedicated React
              Developer, a role I am incredibly passionate about today.
              <br />
              <br />
              As a developer, I am enthusiastic about learning new technologies
              and working on thrilling projects. Here is a list of technologies
              I have had the opportunity to work with so far, and I am
              continuously expanding my skill set.
            </motion.p>
            <motion.h3
              className="heading-mySkills"
              variants={headingMySkills}
              initial="initialState"
              animate="animateState"
            >
              My Skills
            </motion.h3>
            <div className="skills-container">
              {uniqueSkill.map((skill, i) => {
                return (
                  <div key={i} className="each-skill">
                    <motion.h3
                      className="each-skill-heading"
                      custom={i}
                      variants={skillsHeading}
                      initial="initialState"
                      animate="animateState"
                    >
                      {skill}
                    </motion.h3>
                    <motion.div
                      className="each-skill-container"
                      variants={skillsParentContainer}
                      initial="initialState"
                      animate="animateState"
                    >
                      {skills
                        .filter((item) => item.node === skill)
                        .map((item, i) => {
                          const { id, icon, styling } = item;
                          return (
                            <motion.div
                              key={id}
                              className="container"
                              custom={i}
                              variants={skillsChildContainer}
                            >
                              <motion.div
                                styling={styling}
                                className={`icon-container ${styling}`}
                                variants={skillsChildContainer}
                              >
                                <img
                                  className="each-skill-icon"
                                  src={icon}
                                  alt={id}
                                />
                              </motion.div>
                              <motion.p
                                className="icon-name"
                                variants={skillsChildContainer}
                              >
                                {id}
                              </motion.p>
                            </motion.div>
                          );
                        })}
                    </motion.div>
                    <motion.hr
                      className="divideLine"
                      variants={lineVariant}
                      initial="initialState"
                      animate="animateState"
                    />
                  </div>
                );
              })}
            </div>
          </article>
        </motion.div>
      </section>
    </Wrapper>
  );
};

export default About;
