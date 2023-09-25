import styled from "styled-components";

const Wrapper = styled.ul`
  .nav-links {
    display: flex;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 1.5%;
    flex-direction: column;
    gap: 3.5rem;
    opacity: 0;
    z-index: 100;
    /* border: 1px solid yellow; */

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 3rem;
      height: 3rem;
      border: 2.5px solid var(--clr-font);
      border-radius: 50%;
      /* background-color: white; */
    }

    li::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--clr-primary);
      z-index: -1;
    }

    li:hover::before {
      background-color: var(--clr-primary);
      box-shadow: 0 0 25px var(--clr-primary);
    }

    li:hover {
      transform: scale(110%);
      box-shadow: 0 0 20px var(--clr-primary);
      cursor: pointer;
    }

    /* li::before:has(.isActive) {
      color: var(--clr-red);
    }

    li::before .isActive {
      background-color: none;
    }

    .isActive:has(li) {
      outline: 2.5px solid var(--clr-primary);
    } */

    li a {
      color: var(--clr-font);
      margin: auto;
      font-size: 1.4em;
    }
  }

  @media screen and (min-width: 768px) {
    .nav-links {
      animation: showIcons 0.5s ease-in forwards;
      /* opacity: 1; */
    }

    li {
      width: 5rem;
      height: 5rem;
    }
  }

  @keyframes pulse {
    to {
      transform: scale(1.3);
    }
  }

  @keyframes iconScale {
    to {
      transform: scale(1.2);
    }
  }

  @keyframes showIcons {
    to {
      opacity: 1;
    }
  }
`;

export default Wrapper;
