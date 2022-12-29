import React, { useState } from "react";
import styled from "styled-components";
import FilterButtons from "./FilterButtons";
import projects from "../projectData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [initialState, setInitialState] = useState(projects);
  const [filtered, setFiltered] = useState(projects);
  const [active, setActive] = useState(" ");
  // console.log(setFiltered);
  return (
    <Wrapper>
      <section className="section projects" id="projects">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="underline"></div>
          <p className="projects-text">
            This is my latest work and work in progress
          </p>
        </div>
        <FilterButtons
          initialState={initialState}
          setFiltered={setFiltered}
          filtered={filtered}
          setInitialState={setInitialState}
          active={active}
          setActive={setActive}
        />
        <motion.div
          layout
          aniamate={{ opacity: 0 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="section-center projects-center"
        >
          {filtered.map((project) => {
            const { id, name, language, image, url } = project;
            return (
              <AnimatePresence>
                <a
                  layout
                  key={id}
                  href={url}
                  className="project-item project-1"
                >
                  <article className="project">
                    <img
                      src={image}
                      alt="single project"
                      className="project-img"
                    />
                    <div className="project-info">
                      <h4>{name}</h4>
                      <p>{language}</p>
                    </div>
                  </article>
                </a>
              </AnimatePresence>
            );
          })}
        </motion.div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .projects {
    min-height: 60vh;
  }

  .projects-text {
    width: 85vw;
    max-width: 30rem;
    margin: 0 auto;
    color: #102a42;
  }

  .project {
    position: relative;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
  }

  .project-info {
    text-align: center;
    color: var(--clr-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
    opacity: 0;
  }

  .project-info p {
    text-transform: capitalize;
    color: var(--clr-white);
  }

  .project:hover .project-info {
    opacity: 1;
  }

  .project-img {
    transition: var(--transition);
    border-radius: var(--radius);
    height: 15rem;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .project:hover .project-img {
    opacity: 0.1;
    transform: scale(1.05);
  }

  .project:hover::after {
    opacity: 1;
    transform: scale(0.8);
  }

  .show {
    visibility: hidden;
  }

  .hero-btn-1,
  .hero-btn-2 {
    max-width: 8rem;
    padding: 0.7rem 0.8rem;
    font-size: 0.6em;
  }

  @media screen and (min-width: 676px) {
    .projects-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }

    .hero-btn-1,
    .hero-btn-2 {
      max-width: 13rem;
      padding: 1rem 1.5rem;
      font-size: 0.7em;
    }
  }

  @media screen and (min-width: 992px) {
    .projects-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Projects;
