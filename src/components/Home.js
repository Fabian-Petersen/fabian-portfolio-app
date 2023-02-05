import React from "react";
// import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import cv from "../assets/documents/fabian-petersen-12.2022-v1.pdf";
import { useGlobalContext } from "../ContextAPI";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
// import ScrollNav from "./ScrollNav";

const Home = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();

  // const { ref, inView } = useInView();
  return (
    <Wrapper>
      {/* {inView ? <Navbar /> : <ScrollNav />} */}

      <Navbar />
      {openSidebar && (
        <SideBar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
      )}

      <header className="hero section" id="home">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h3>Hi, my name is</h3>
            <h1>
              <span>Fabian </span>Petersen.
            </h1>
            <p className="hero-sub-heading">
              Welcome to my official portfolio website showcasing my work as a
              <span> Front End Developer.</span>
            </p>
            <div className="home-btns">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="btn btn-1"
              >
                Download CV
              </a>
              <a href={"/projects"} className="btn btn-2">
                My Projects
              </a>
            </div>
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

  h1,
  h3 {
    position: relative;
    width: fit-content;
    align-items: left;
    color: var(--clr-white);
    text-transform: none;
    padding: 0.5rem 0;
    margin: 0;
  }

  h3 {
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h1 span {
    color: var(--clr-yellow);
  }

  .hero-sub-heading {
    opacity: 0;
    font-size: 0.8rem;
    line-height: 2rem;
    text-transform: none;
    animation: textAnimation 500ms ease 3400ms forwards;
    /* border: var(--border-white); */
    max-width: 80%;
    span {
      color: var(--clr-yellow);
    }
  }

  //? ======================== Start of the styles for the animation for the typewriter text and pointer ================= //

  h1::before,
  h3::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  h3::before {
    background-color: var(--clr-bg-dark);
    animation: typewriterAnimation 1500ms steps(14) 1s forwards;
  }

  h1::before {
    background-color: var(--clr-bg-dark);
    animation: typewriterAnimation 1500ms steps(16) 2.5s forwards;
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

  .home-btns :is(.btn-1, .btn-2) {
    max-width: 10rem;
    border-radius: 0px;
    font-size: 0.5rem;
    padding: 0.7rem 1rem;
  }

  .btn-1 {
    background-color: var(--clr-yellow);
    color: var(--clr-primary-5);
  }

  .btn-2 {
    background-color: transparent;
    color: var(--clr-white);
    border: 1px solid yellow;
  }

  .btn-1:hover {
    background-color: white;
    color: var(--clr-red);
  }

  .btn-2:hover {
    background-color: white;
    border: 1px solid var(--clr-white);
    color: var(--clr-red);
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

  @media screen and (min-width: 450px) {
    .hero-heading h1 {
      font-size: 1.8rem;
    }

    .hero-sub-heading {
      font-size: 1.2em;
    }

    .home-btns {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      padding: 1.2rem 0;
    }

    .btn-1,
    .btn-2 {
      max-width: 10rem;
      padding: 0.8rem 1rem;
      font-size: 0.7rem;
    }

    .hero-icons {
      font-size: 1.8rem;
    }

    .hero-heading::after {
      height: 1.8rem;
    }
  }

  @media screen and (min-width: 720px) {
    h3 {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    }

    .hero-sub-heading {
      font-size: 1.2rem;
      line-height: 2.5rem;
    }

    .home-btns {
      gap: 1.5rem;
      padding: 1rem 0;

      .btn-1,
      .btn-2 {
        max-width: 15rem;
        padding: 0.8rem 1.3rem;
        font-size: 0.6em;
      }
    }
    .hero-heading::after {
      height: 4rem;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 4.5rem;
    }

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

    .home-btns :is(.btn-1, .btn-2) {
      max-width: 25rem;
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

export default Home;
