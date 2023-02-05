import React from "react";
import styled from "styled-components";
import { useObserverContext } from "../ObserverAPI";
import skills from "../skillsData";

const uniqueSkill = [...new Set(skills.map((item) => item.node))];

const About = () => {
  const { ref1 } = useObserverContext();

  return (
    <Wrapper>
      <section className='section about' id='about' ref={ref1}>
        <div className='section-title'>
          <h2 id='testing'>About Me</h2>
          <div className='underline'></div>
        </div>
        {/* <!-- end of section title --> */}
        <div className='section-center about-center'>
          {/* <!-- about info --> */}
          <article className='about-info'>
            <p>
              I'm a chemical engineer by trade and throughout my career I worked
              on various software implementation projects with TotalEnergies.
              Through this exposure I fell in love with the development of apps
              myself and today I'm a passionate React Developer.
              <br />
              <br /> As a developer I love to learn new technologies and to
              build exciting projects. Below is a list (and growing) of
              technologies I have worked with thus far.
            </p>
            <h3 className='heading-mySkills'>My Skills</h3>
            <div className='skills-container'>
              {uniqueSkill.map((skill, index) => {
                return (
                  <div key={index} className='each-skill'>
                    <h3 className='each-skill-heading'>{skill}</h3>
                    <div className='each-skill-container'>
                      {skills
                        .filter((item) => item.node === skill)
                        .map((item) => {
                          const { id, icon } = item;
                          return (
                            <div key={id} className='icon-container'>
                              <img
                                className='each-skill-icon'
                                src={icon}
                                alt={id}
                              />
                              <p className='icon-name'>{id}</p>
                            </div>
                          );
                        })}
                    </div>
                    <hr className='divideLine' />
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section {
    /* border: var(--border-white); */
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .section-center {
    article {
      p {
        font-size: 0.8rem;
      }
    }

    .heading-mySkills {
      /* border: var(--border-red); */
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1.5rem;
      color: var(--clr-white);
    }
  }

  .about-info p {
    margin-bottom: 2rem;
    font-size: 0.8rem;
    font-weight: normal;
  }

  .each-skill {
    .each-skill-heading {
      font-size: 0.8rem;
      font-weight: normal;
      margin-bottom: 1rem;
      color: var(--clr-white);
    }

    .each-skill-container {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .each-skill-icon {
      width: 2rem;
      height: 2rem;
      margin-bottom: 1rem;
      /* border: var(--border-white); */
    }
  }
  .icon-container {
    .icon-name {
      text-align: center;
      font-size: 0.6rem;
      text-transform: uppercase;
    }
  }

  hr {
    width: 100%;
    margin-bottom: 1.5rem;
    border: 0.2px solid rgba(255, 255, 255, 0.05);
  }

  @media screen and (min-width: 475px) {
    .section-center {
      article {
        p {
          font-size: 0.9rem;
        }
      }

      .heading-mySkills {
        font-size: 1.6rem;
      }
    }

    .each-skill {
      .each-skill-heading {
        font-size: 1rem;
      }

      .each-skill-icon {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  @media screen and (min-width: 760px) {
    .section-center {
      article {
        p {
          font-size: 1rem;
        }
      }

      .heading-mySkills {
        font-size: 1.8rem;
      }
    }

    .each-skill {
      .each-skill-heading {
        font-size: 1.2rem;
      }

      .each-skill-icon {
        width: 3rem;
        height: 3rem;
      }
    }

    .icon-container {
      .icon-name {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .each-skill {
      .each-skill-icon {
        width: 4.5rem;
        height: 4.5rem;
      }
    }
  }
`;

export default About;
