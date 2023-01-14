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
      <div className='btn-container section-center'>
        {uniqueValues.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeButton === item
                  ? "btn btn-1 project-btn active"
                  : "btn btn-1 project-btn"
              }
              onClick={handleClick(item)}>
              {item}
            </button>
          );
        })}
        <button className='btn btn-1' id='project-btn-all' onClick={reset}>
          All
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 0.5rem;
  }

  button {
    flex: 1 1 0;
    width: max-content;
    padding: 0.8rem 0rem;
  }

  button.active {
    background-color: var(--clr-red);
    color: white;
  }

  @media screen and (min-width: 450px) {
    .btn-container {
      gap: 1rem;
      padding: 0.7rem 1rem;
      font-size: 0.7rem;
    }

    button {
      max-width: 9rem;
    }
  }
`;

export default FilterButtons;
