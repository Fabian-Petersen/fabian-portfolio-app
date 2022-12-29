import React, { useState } from "react";
import styled from "styled-components";
import FilterButtons from "./FilterButtons";
import projects from "../projectData";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const [initialState, setInitialState] = useState(projects);
  const [filtered, setFiltered] = useState(projects);
  const [active, setActive] = useState(" ");

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
        <div className="section-center projects-center">
          {filtered.map((project) => {
            const { id, name, language, image, url, code } = project;
            return (
              <div className="project" key={id}>
                <a
                  className="project-item"
                  target="_blank"
                  rel="noreferrer"
                  layout
                  href={url}
                >
                  <article>
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
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="project-code-link"
                >
                  <FontAwesomeIcon icon={faGithub} className="code-icon" />
                </a>
              </div>
            );
          })}
        </div>
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
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    position: relative;
  }

  .project-item {
    width: 100%;
    display: grid;
    border: var(--border-white);
  }

  .project article {
    position: relative;
  }

  .project-info {
    text-align: center;
    color: var(--clr-blue);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--transition);
    opacity: 0;
    width: 90%;
  }

  .project-info h4 {
    font-size: 1.3rem;
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

  .project-code-link {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    color: white;
  }

  .project:hover .project-code-link {
    opacity: 1;
  }

  .code-icon {
    color: white;
    font-size: 2rem;
    color: var(--clr-white);
  }

  .code-icon:hover {
    cursor: pointer;
    color: var(--clr-yellow);
    opacity: 1;
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
