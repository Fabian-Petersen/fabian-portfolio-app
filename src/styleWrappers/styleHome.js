import styled from "styled-components";

const Wrapper = styled.header`
  header {
    position: realtive;
  }

  .section-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: var(--border-white); */
    min-height: calc(100vh - 3rem);
  }

  .underline {
    margin-bottom: 0.8rem;
    margin-left: 0;
  }

  h1,
  h3 {
    position: relative;
    width: fit-content;
    align-items: left;
    color: var(--clr-font);
    text-transform: none;
    padding: 0.5rem 0;
    margin: 0;
  }

  h3 {
    font-weight: var(--font-weight-400);
  }

  h1 {
    font-weight: var(--font-weight-800);
  }

  h1 span {
    color: var(--clr-primary);
  }

  .hero-sub-heading {
    font-size: var(--fs-text);
    line-height: 2rem;
    text-transform: none;
    animation: textAnimation 500ms ease 3400ms forwards;
    /* border: var(--border-white); */
    max-width: 80%;
    span {
      color: var(--clr-primary);
    }
  }

  //$  ================================================= Start Button Styles ============================================ //

  .btn-container {
    position: relative;
    margin: 2.5rem 0;
    /* border: 1px solid white; */
    max-width: 15rem;
    height: 5rem;
    display: flex;
    /* height: 10rem; */
  }

  .btn-projects {
    /* position: relative; */
    font-size: 1em;
    border-radius: 50px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    padding: 1.2em;
    color: var(--clr-font);
    transition: transform 0.1s ease-in;
    background-color: var(--clr-primary);
    width: 100%;
    height: 100%;
  }

  .btn-projects:hover {
    background-clip: padding-box;
    cursor: pointer;
    transform: scale(0.95);
  }

  .btn-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    z-index: -1;
    border: 1px solid var(--clr-primary);
  }

  .btn-container:hover::before {
    animation: pulse 850ms infinite;
  }

  //$  ================================================= End Button Styles ============================================ //

  @media screen and (min-width: 450px) {
    .hero-icons {
      font-size: 1.8rem;
    }

    .hero-heading::after {
      height: 1.8rem;
    }

    .btn-projects {
      padding: 1.8em 2em;
    }
  }

  @media screen and (min-width: 720px) {
    .btn-container {
      margin: 5rem 0;
    }

    h1 {
      margin-bottom: 1.5rem;
    }

    .hero-sub-heading {
      line-height: 2.5rem;
    }

    .hero-heading::after {
      height: 4rem;
    }
  }

  @media screen and (min-width: 992px) {
    .hero .underline {
      margin-bottom: 1.5rem;
    }

    .hero-center {
      grid-template-columns: 50rem;
    }

    .social-icon {
      font-size: 2.5rem;
    }

    .social-icon:hover {
      transform: scale(1.2);
    }

    .hero {
      background-size: cover;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(0.8);
      outline: 5px solid var(--clr-primary);
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
      outline: 0px solid var(--clr-primary);
    }
  }
`;

export default Wrapper;
