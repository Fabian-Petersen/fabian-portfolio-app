import React from "react";
import styled from "styled-components";
import FilterButtons from "./FilterButtons";
import PulseIcon from "./PulseIcon";
import { useGlobalContext } from "../ContextAPI";
import { useParams, Link } from "react-router-dom";

const Projects = () => {
  const { projectMenu } = useGlobalContext();
  const { id } = useParams();
  return (
    <Wrapper>
      <section className='section projects' id='projects'>
        <div className='section-title'>
          <h2>Projects</h2>
          <div className='underline'></div>
          <p className='projects-text'>
            This is my latest work and work in progress
          </p>
        </div>
        <FilterButtons className='filterButtons' />
        <div className='section-center projects-center'>
          {projectMenu.map((item) => {
            const { id, name, language, image, code, url } = item;
            return (
              <div className='project-card' key={id}>
                <img src={image} alt={name} className='project-img' />
                <div className='card-body'>
                  <Link to={`/${id}`}>
                    <h4 className='project-title'>{name}</h4>
                  </Link>
                  <p>Designed with {language}</p>
                  <PulseIcon code={code} url={url} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    width: 100%;
    height: 25rem;
    align-items: center;
    background-size: cover;
    transition: all 200ms ease;
    overflow: hidden;
  }

  .project-title:hover {
    cursor: pointer;
    color: var(--clr-yellow);
    transform: scale(1.05);
  }

  .projects-text {
    font-size: 1rem;
  }

  .project-img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    -o-object-fit: cover;
    object-fit: cover;
  }

  .project-img:hover {
    opacity: 0.3;
  }

  .card-body {
    position: absolute;
    display: grid;
    place-content: center;
    left: 0;
    right: 0;
    height: 100%;
    bottom: -100%;
    border-radius: var(--radius);
    transition: var(--transition);
    background-color: var(--clr-black);
    opacity: 0.3;
  }

  .project-card:hover .card-body {
    transform: translateY(0);
    opacity: 0.8;
    bottom: 0;
    /* visibility: visible; */
  }

  .project-title {
    font-size: 2rem;
    text-align: center;
    color: white;
  }

  .project-card p {
    text-transform: capitalize;
    font-size: 1.3rem;
    color: var(--clr-white);
    text-align: center;
  }

  .project:hover .project-info {
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
