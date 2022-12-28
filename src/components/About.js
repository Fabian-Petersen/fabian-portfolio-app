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
          <article className="about-img">
            <img src={image} className="hero-photo" alt="heroimage" />
          </article>
          <article className="about-info">
            <p>
              My Name is Fabian Petersen, I'm a React Web Developer based in
              Cape Town, South Africa. I'm very passionate and dedicated about
              web development
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
            <a href="#contact" className="btn hero-btn-1" id="btn">
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
    background-color: var(--clr-primary-1);
    padding-bottom: 10rem;
  }

  .about-title {
    margin-bottom: 2rem;
  }

  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }

  .about-skills-heading {
    margin-bottom: 1.5rem;
  }

  .resume-btn {
    background-color: var(--clr-primary-8);
  }

  .about-info p {
    color: var(--clr-grey-head-2);
    margin-bottom: 3rem;
  }

  .about-img {
    display: none;
    justify-self: center;
  }

  .about-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    border: 3px solid var(--clr-red);
    justify-content: space-between;
    padding: 1.2rem;
    margin-bottom: 2rem;
    max-width: 500px;
    border-radius: var(--radius);
  }

  .about-details ul li {
    display: flex;
    /* justify-content: flex-start; */
    /* gap: 0.5rem; */
    flex-direction: column;
    align-items: center;
    /* border: var(--border-red); */
  }

  .fa-icons {
    width: 18%;
    font-size: 2rem;
    padding: 0.5rem 0rem;
  }

  .about-details ul li:not(li:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 475px) {
    .about-details ul li {
      gap: 0.8rem;
      flex-direction: row;
      align-items: center;
      /* border: var(--border-red); */
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 10rem;
      padding: 0.8rem 1rem;
      font-size: 0.7em;
    }
  }

  @media screen and (min-width: 760px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }

    .hero-photo {
      height: 500px;
      border-radius: var(--radius);
    }

    .hero-photo::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: -1;
    }

    .about-img {
      display: block;
      position: relative;
    }

    .about-img::before {
      left: -2rem;
    }

    .about-info {
      align-self: start;
    }

    .about-details ul li {
      display: flex;
      flex-direction: row;
      gap: 1.3rem;
      align-items: center;
    }

    .resume-btn {
      margin-left: 1rem;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 15rem;
      padding: 1rem 1.5rem;
      font-size: 0.7em;
    }
  }
`;

export default About;
