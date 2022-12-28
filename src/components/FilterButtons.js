import React from "react";
import styled from "styled-components";

const FilterButtons = ({ initialState, setFiltered, setActive, active }) => {
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
        <a href="#1">
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
        </a>
        <a href="#1">
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
        </a>
        <a href="#1">
          <button
            className={
              active === "gatsby"
                ? "btn hero-btn-1 project-btn active"
                : "btn hero-btn-1 project-btn"
            }
            onClick={handleClick("gatsby")}
          >
            gatsby
          </button>
        </a>
        <a href="#1">
          <button
            className={
              active === "next"
                ? "btn hero-btn-1 project-btn active"
                : "btn hero-btn-1 project-btn"
            }
            onClick={handleClick("next")}
          >
            next
          </button>
        </a>
        <a href="#1">
          <button
            className="btn hero-btn-1"
            id="project-btn-all"
            onClick={reset}
          >
            All
          </button>
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .project-btns {
    display: flex;

    /* grid-template-rows: repeat(auto-fit, minmax (3rem, 1fr)); */
    /* border: var(--border-red); */
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  .project-btns a button {
    width: 12rem;
  }

  button.active {
    background-color: var(--clr-red);
  }
`;

export default FilterButtons;
