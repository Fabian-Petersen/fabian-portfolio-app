import React from "react";
import styled from "styled-components";
import image from "../assets/images/hero-img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/images/icons";
import "../index.css";

const About = () => {
  const { faHtml5, faGithub, faCss3, faJs, faReact, faBootstrap, faSass } =
    Icons;
  return (
    <Wrapper>
      <section className="section about" id="about">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- end of section title --> */}
        <div className="section-center about-center">
          {/* <!-- about info --> */}
          <article className="about-info">
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
            <h3 className="about-skills-heading">My Skills</h3>
            <div className="about-details">
              <ul className="details-left">
                <li>
                  <FontAwesomeIcon icon={faHtml5} className="fa-icons" />
                  HTML5
                </li>
                <li>
                  <FontAwesomeIcon icon={faCss3} className="fa-icons" />
                  CSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} className="fa-icons" />
                  JavaScript
                </li>
                <li>
                  <FontAwesomeIcon icon={faReact} className="fa-icons" />
                  React
                </li>
              </ul>
              <ul className="details-right">
                <li>
                  <FontAwesomeIcon icon={faBootstrap} className="fa-icons" />
                  Bootstrap 5
                </li>
                <li>
                  <FontAwesomeIcon icon={faJs} className="fa-icons" />
                  Jquery
                </li>
                <li>
                  <FontAwesomeIcon icon={faSass} className="fa-icons" />
                  SCSS
                </li>
                <li>
                  <FontAwesomeIcon icon={faGithub} className="fa-icons" />
                  Git Version Control
                </li>
              </ul>
            </div>
            <a href="#contact" className="btn hero-btn-1 btn-about" id="btn">
              Contact ME
            </a>
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
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .about-details {
    display: flex;
    position: relative;
    border: 3px solid var(--clr-red);
    justify-content: space-between;
    padding: 1.2rem;
    max-width: 500px;
    border-radius: var(--radius);
    /* border: var(--border-white); */
  }

  .about-details ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--clr-white);
  }

  .fa-icons {
    width: 18%;
    font-size: 2rem;
    padding: 0.5rem 0rem;
    color: var(--clr-white);
  }

  .about-details ul li:not(li:last-child) {
    margin-bottom: 15px;
  }

  .btn-about {
    min-width: 10rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    /* border: var(--border-white); */
  }

  @media screen and (min-width: 475px) {
    .about-skills-heading {
      font-size: 2rem;
      margin-bottom: 1.8rem;
    }

    .about-details {
      display: flex;
      margin: 0 auto;
      margin-bottom: 2rem;
      /* border: var(--border-white); */
    }

    .about-details ul li {
      gap: 0.8rem;
      flex-direction: row;
      /* border: var(--border-red); */
    }

    .hero-btn-1,
    .hero-btn-2 {
      padding: 0.8rem 1rem;
      font-size: 0.7em;
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
