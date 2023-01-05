import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../ContextAPI";

const FilterButtons = () => {
  const { initialState, setFiltered, setActive, active } = useGlobalContext();

  const handleClick = (lang) => () => {
    setActive(lang);
    const filtered = initialState.filter(
      (project) => project.language === lang
    );

    setFiltered(filtered);
  };

  const reset = () => {
    setFiltered(initialState);
    setActive(" ");
  };

  return (
    <Wrapper>
      <div className="project-btns section-center">
        <button
          className={
            active === "javascript"
              ? "btn hero-btn-1 project-btn active"
              : "btn hero-btn-1 project-btn"
          }
          onClick={handleClick("javascript")}
        >
          tutorials
        </button>
        <button
          className={
            active === "react"
              ? "btn hero-btn-1 project-btn active"
              : "btn hero-btn-1 project-btn"
          }
          id="btn-react"
          onClick={handleClick("react")}
        >
          react
        </button>
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
    justify-content: center;
    gap: 1rem;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
    /* border: var(--border-white); */
  }

  .project-btns button {
    width: 12rem;
  }

  .hero-btn-1,
  .hero-btn-2 {
    max-width: 8rem;
    padding: 0.7rem 0.8rem;
    font-size: 0.6em;
  }

  button.active {
    background-color: var(--clr-red);
  }
`;

export default FilterButtons;
