import React from "react";
import styled from "styled-components";

const FilterButtons = ({
  initialState,
  setFiltered,
  setActive,
  active,
  openModal,
  setOpenModal,
}) => {
  const handleClick = (lang) => () => {
    setActive(lang);
    const filtered = initialState.filter(
      (project) => project.language === lang
    );

    if (filtered.length === 0) {
      setOpenModal(true);
    }

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
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  .project-btns a button {
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
