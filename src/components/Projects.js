import React from "react";
import styled from "styled-components";
import FilterButtons from "./FilterButtons";
import PulseIcon from "./PulseIcon";
import { useGlobalContext } from "../ContextAPI";

const Projects = () => {
  const { filtered } = useGlobalContext();
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
        <FilterButtons />
        <div className="section-center projects-center">
          {filtered.map((project) => {
            const { id, name, language, image, url, code } = project;
            return (
              <div className="project" key={id}>
                <a
                  className="project-item"
                  target="_blank"
                  rel="noreferrer"
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
                      <p>Designed with {language}</p>
                    </div>
                  </article>
                </a>
                <PulseIcon code={code} />
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .project {
    display: flex;
    flex-direction: column;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    width: 100%;
    height: 20rem;
    background-size: cover;
    position: relative;
  }

  .project:hover {
    cursor: pointer;
  }

  .project-item {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .project-img {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    border-radius: var(--radius);
    -o-object-fit: cover;
    object-fit: cover;
  }

  .project-info {
    text-align: center;
    color: var(--clr-blue);
    display: flex;
    flex-direction: column;
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

  .project:hover .project-img {
    opacity: 0.1;
    transform: scale(1.05);
  }

  .project:hover::after {
    opacity: 1;
    transform: scale(0.8);
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
