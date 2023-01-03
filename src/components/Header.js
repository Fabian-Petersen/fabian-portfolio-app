import React from "react";
import styled from "styled-components";
import cv from "../assets/documents/fabian-petersen-12.2022.pdf";
import SocialsHover from "./SocialsHover";

// import bgImage from "../assets/images/hero-simple-shiny-bg.svg";

const Header = () => {
  return (
    <Wrapper>
      <header className="hero section" id="home">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1 className="hero-heading">
              Hi, my name is <span className="hero-amplify">Fabian.</span>
            </h1>
            <h3 className="hero-sub-heading">
              Welcome to my official portfolio website showcasing my work as a
              <span className="hero-amplify"> React Web Developer</span>
            </h3>
            <div className="home-btns">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="btn hero-btn-1"
              >
                Download CV
              </a>
              <a href="#projects" className="btn hero-btn-2">
                My Projects
              </a>
            </div>
            <SocialsHover />
            {/* <Socials /> */}
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

  .underline {
    margin-bottom: 0.8rem;
    margin-left: 0;
    opacity: 0;
    animation: underlineAnimation 0.5s ease-in 2800ms forwards;
  }

  .hero-center {
    min-height: calc(100vh - 3rem);
    display: grid;
    place-items: center;
  }

  .hero-info h4 {
    color: var(--clr-grey-par-5);
    margin-bottom: 2rem;
  }

  .hero-heading {
    margin-bottom: 2rem;
    font-size: 2rem;
    position: relative;
    width: max-content;
    text-transform: none;
    padding: 0.25rem;
    /* border: var(--border-red); */
  }

  .hero-sub-heading {
    animation: textAnimation 1000ms ease-in 2000ms forwards;
    transform: translateY(0);
    opacity: 0;
  }

  .hero-heading::before,
  .hero-heading::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .hero-heading::before {
    background-color: var(--clr-bg-dark);
    animation: typewriterAnimation 3000ms steps(22) 1s forwards;
  }

  .hero-heading::after {
    width: 3px;
    background-color: var(--clr-yellow);
    animation: cancelCursor 200ms ease 5s,
      typewriterAnimation 3000ms steps(22) 1s forwards,
      cursorBlink 850ms steps(2, start) infinite;
  }

  @keyframes typewriterAnimation {
    to {
      left: 100%;
    }
  }

  @keyframes underlineAnimation {
    to {
      opacity: 1;
    }
  }

  @keyframes textAnimation {
    0% {
      opacity: 0;
      transform: translateY(2.5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes cursorBlink {
    to {
      opacity: 0;
    }
  }

  @keyframes cursorCancel {
    to {
      opacity: 0;
    }
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
    padding: 1.2rem 0;
    margin-bottom: 1rem;
    opacity: 0;
    animation: textAnimation 1000ms ease-in 2000ms forwards;
  }

  .hero-btn-1,
  .hero-btn-2 {
    max-width: 10rem;
    padding: 0.8rem 1rem;
    font-size: 0.7em;
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
      padding: 1rem 0;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 15rem;
      padding: 0.8rem 1.3rem;
      font-size: 0.6em;
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
      padding: 0.8rem 1.2rem;
      font-size: 0.75em;
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
