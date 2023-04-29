import styled from "styled-components";

const Wrapper = styled.ul`
  .nav-links {
    position: fixed;
    top: 45%;
    right: 1%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    justify-content: space-around;
    justify-content: center;
    opacity: 0;
    /* border: 1.5px solid red; */

    li {
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--clr-bg);
      outline: 2.5px solid var(--clr-font);
      border-radius: 50%;
      display: flex;
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
      transform: scale(0.9);
      z-index: -1;
    }

    li:hover::before {
      background-color: var(--clr-primary);
      box-shadow: 0 0 25px var(--clr-primary);
      /* animation: pulse 1s ease-in alternate infinite; */
    }

    li:hover {
      box-shadow: 0 0 20px var(--clr-primary);
      /* animation: iconScale 1s ease-in alternate infinite; */
      outline: 2.5px solid var(--clr-primary);
    }

    .isActive {
      color: var(--clr-primary);
    }

    .isActive:has(li) {
      outline: 2.5px solid var(--clr-primary);
    }

    li a {
      /* border: 1px solid blue; */
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
