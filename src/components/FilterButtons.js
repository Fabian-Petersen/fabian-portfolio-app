import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../ContextAPI";
import projects from "../projectData";

const FilterButtons = () => {
  const { setProjectMenu, activeButton, setActiveButton } = useGlobalContext();

  const handleClick = (lang) => () => {
    setActiveButton(lang);
    const filteredProjects = projects.filter(
      (project) => project.language === lang
    );

    setProjectMenu(filteredProjects);
  };

  const reset = () => {
    setProjectMenu(projects);
    setActiveButton(" ");
  };

  const uniqueValues = [...new Set(projects.map((item) => item.language))];
  return (
    <Wrapper>
      <div className="project-btns section-center">
        {uniqueValues.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeButton === item
                  ? "btn hero-btn-1 project-btn active"
                  : "btn hero-btn-1 project-btn"
              }
              onClick={handleClick(item)}
            >
              {item}
            </button>
          );
        })}
        <button className="btn hero-btn-1" id="project-btn-all" onClick={reset}>
          All
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .project-btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .project-btns button {
    flex-basis: 100%;
  }
  .hero-btn-1,
  .hero-btn-2 {
    max-width: 8rem;
    padding: 0.7rem 0.8rem;
    font-size: 0.6rem;
  }

  button.active {
    background-color: var(--clr-red);
  }
`;

export default FilterButtons;
