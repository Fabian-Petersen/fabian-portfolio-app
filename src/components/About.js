import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import skills from "../skillsData";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <section className='section about' id='about'>
        <div className='section-title'>
          <h2>About Me</h2>
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
            <h3 className='about-skills-heading'>My Skills</h3>
            <div className='about-skills-container'>
              <ul>
                {skills.map((item) => {
                  const { id, name, icon } = item;
                  return (
                    <li key={id}>
                      <FontAwesomeIcon icon={icon} className='fa-icons' />
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link to='/contact'>
              <button className='btn hero-btn-1 btn-about'>Contact ME</button>
            </Link>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about {
    background-color: var(--clr-bg-dark);
    padding-bottom: 10rem;
  }

  .about-title {
    margin-bottom: 2rem;
  }

  .about-center {
    color: var(--clr-white);
    /* border: var(--border-red); */
  }

  .about-skills-heading {
    /* border: var(--border-red); */
    font-size: 1.5rem;
    text-align: center;
  }

  .about-info p {
    color: var(--clr-white);
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .about-skills-container {
    border: 3px solid var(--clr-red);
    padding: 1.2rem;
    max-width: 400px;
    border-radius: var(--radius);
    margin: 0 auto;
  }

  .about-skills-container ul {
    display: grid;
    column-gap: 3rem;
    grid-template-columns: 1fr 1fr;
    color: var(--clr-white);
    width: 100%;
  }

  .about-skills-container ul li {
    display: flex;
    /* border: var(--border-white); */
    align-items: center;
    gap: 0.8rem;
    color: var(--clr-white);
    font-size: 0.8rem;
    padding: 0.5rem 0;
  }

  .fa-icons {
    font-size: 2rem;
    position: relative;
    width: 2rem;
    height: 2rem;
    color: var(--clr-white);
  }

  .about-skills-container ul li:not(li:last-child) {
    margin-bottom: 15px;
  }

  .btn-about {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    max-width: 8rem;
    padding: 0.75rem 0.8rem;
    font-size: 0.5rem;
    margin-top: 2rem;
    /* border: var(--border-white); */
  }

  @media screen and (min-width: 475px) {
    .about-skills-heading {
      font-size: 2rem;
      margin-bottom: 1.8rem;
    }

    .about-skills-container {
      margin: 0 auto;
      /* border: var(--border-white); */
    }

    .about-skills-container ul li {
      gap: 0.8rem;
      font-size: 1rem;
      padding: 0.5rem 0;
      /* flex-direction: row; */
      /* border: var(--border-red); */
    }
  }

  @media screen and (min-width: 760px) {
    .about-info {
      align-self: start;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 15rem;
      width: 0 auto;
      padding: 1rem 1.5rem;
      font-size: 0.7em;
    }

    .about-details {
      font-size: 1.3rem;
      gap: 2rem;
      max-width: 600px;
      justify-content: space-between;
    }

    .fa-icons {
      font-size: 2.5rem;
      color: var(--clr-white);
    }
  }
`;

export default About;
