import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/images/icons";
import Background from "./BackgroundSVG";

// import bgImage from "../assets/images/hero-simple-shiny-bg.svg";

const Header = () => {
  const { faFacebook, faTwitter, faLinkedin, faGithub } = Icons;
  return (
    <Wrapper>
      <header className="hero section" id="home">
        <Background />
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1 className="hero-heading">
              Hi, I'm <span className="hero-amplify">Fabian</span>
            </h1>
            <h3 className="hero-sub-heading">
              Welcome to my official portfolio website showcasing my work as a
              <span className="hero-amplify"> React Web App Developer</span>
            </h3>
            <div className="home-btns">
              <a href="contact.html" className="btn hero-btn-1">
                Download CV
              </a>
              <a href="#projects" className="btn hero-btn-2">
                My Projects
              </a>
            </div>
            <ul className="social-icons hero-icons">
              <li>
                <a href="https://www.facebook.com" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#1" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#1" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#1" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </article>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  header {
    position: realtive;
  }

  /* @import url("../assets/images/hero-simple-shiny-bg/svg"); */
  .hero .underline {
    margin-bottom: 0.8rem;
    margin-left: 0;
  }

  .hero {
    /* background-color: var(--clr-grey-head-1); */
    /* background-size: cover; */
  }

  .hero-center {
    min-height: calc(100vh - 3rem);
    display: grid;
    place-items: center;
  }

  /* .hero-info {
  border: 1px solid white;
} */

  .hero-info h4 {
    color: var(--clr-grey-par-5);
    margin-bottom: 2rem;
  }

  .hero-heading {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .hero-amplify {
    color: var(--clr-yellow);
  }

  .hero-sub-heading {
    color: var(--clr-white);
    margin-bottom: 3rem;
    font-size: 0.8rem;
    line-height: 2.5rem;
    text-transform: none;
  }

  .home-btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* border: var(--border-white); */
    padding: 1.2rem 0;
    margin-bottom: 1rem;
  }

  .hero-btn-1,
  .hero-btn-2 {
    max-width: 10rem;
    padding: 0.8rem 1rem;
    font-size: 0.7em;
  }

  .hero-icons {
    display: flex;
    gap: 1.6rem;
    font-size: 1.5rem;
    justify-items: start;
    /* border: var(--border-red); */
    padding: 1.2rem 0;
  }

  .social-icon {
    color: var(--clr-white);
  }

  .social-icon:hover {
    color: var(--clr-yellow);
  }

  .hero-btn-1 {
    background-color: var(--clr-primary-5);
    color: var(--clr-white);
  }

  .hero-btn-1:hover {
    background-color: white;
    color: var(--clr-grey-head-3);
  }

  .hero-btn-2 {
    background-color: var(--clr-white);
    color: var(--clr-grey-head-1);
  }

  .hero-btn-1:hover,
  .hero-btn-2:hover {
    background-color: var(--clr-red);
    color: var(--clr-white);
  }

  @media screen and (min-width: 450px) {
    .hero-heading {
      /* margin-top: 5rem; */
      font-size: 2rem;
    }

    .home-btns {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      padding: 1.2rem 0;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 10rem;
      padding: 0.8rem 1rem;
      font-size: 0.7em;
    }

    .hero-icons {
      font-size: 1.8rem;
    }
  }

  @media screen and (min-width: 720px) {
    .hero-heading {
      font-size: 3rem;
    }

    .hero-sub-heading {
      font-size: 1.3rem;
      line-height: 2.5rem;
    }

    .home-btns {
      gap: 1.5rem;
      padding: 1.2rem 0;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 15rem;
      padding: 1rem 1.5rem;
      font-size: 0.7em;
    }
  }

  @media screen and (min-width: 992px) {
    .hero .underline {
      margin-bottom: 1.5rem;
    }

    .hero-center {
      grid-template-columns: 50rem;
    }

    .home-btns {
      gap: 2rem;
      padding: 1.5rem 0;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 20rem;
      padding: 1.3rem 1.8rem;
      font-size: 0.9em;
    }

    .social-icon {
      font-size: 2rem;
    }

    .social-icon:hover {
      transform: scale(1.2);
    }

    .hero {
      background-size: cover;
    }
  }
`;

export default Header;
