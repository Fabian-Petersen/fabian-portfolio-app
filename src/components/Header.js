import React, { useState } from "react";
import styled from "styled-components";
import cv from "../assets/documents/fabian-petersen-12.2022.pdf";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import SocialsHover from "./SocialsHover";

// import bgImage from "../assets/images/hero-simple-shiny-bg.svg";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Wrapper>
      {openSidebar ? (
        <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      ) : (
        <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      )}
      <header className="hero section" id="home">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <div className="hero-heading">
              <h1>
                Hi, my name is <span>Fabian.</span>
              </h1>
            </div>
            <p className="hero-sub-heading">
              Welcome to my official portfolio website showcasing my work as a
              <span> React Web Developer.</span>
            </p>
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
    animation: underlineAnimation 0.5s ease 3400ms forwards;
  }

  .hero-center {
    min-height: calc(100vh - 3rem);
    display: grid;
    place-items: center;
  }

  .hero-heading {
    position: relative;
    margin-bottom: 1rem;
    /* border: var(--border-white); */
    width: fit-content;
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.4rem;
      text-transform: none;
    }

    span {
      color: var(--clr-yellow);
    }
  }

  .hero-sub-heading {
    opacity: 0;
    font-size: 1.2em;
    width: 100%;
    line-height: 2rem;
    text-transform: none;
    animation: textAnimation 500ms ease 3400ms forwards;
    /* border: var(--border-white); */
    max-width: fit-content;
    span {
      color: var(--clr-yellow);
    }
  }

  //? ======================== Start of the styles for the animation for the typewriter text and pointer ================= //

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
    height: 1.5rem;
    background-color: var(--clr-yellow);
    animation: typewriterAnimation 3000ms steps(22) 1s forwards,
      cursorBlink 850ms steps(2, start) infinite;
  }

  //? ======================== End of the styles for the animation for the typewriter text and pointer ================= //

  //$  ================================================= Start Button Styles ============================================ //

  .home-btns {
    display: flex;
    gap: 1.5rem;
    padding: 1.2rem 0;
    opacity: 0;
    /* border: var(--border-white); */
    animation: textAnimation 600ms ease 3500ms forwards;
  }

  .hero-btn-1,
  .hero-btn-2 {
    max-width: 8rem;
    padding: 0.9rem 0.55rem;
    font-size: 0.6em;
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

  //$  ================================================= End Button Styles ============================================ //

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

  @keyframes typewriterAnimation {
    to {
      left: 100%;
    }
  }

  @keyframes cursorBlink {
    to {
      opacity: 0;
    }
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
