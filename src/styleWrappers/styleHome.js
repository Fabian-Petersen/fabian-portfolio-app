import styled from "styled-components";

const Wrapper = styled.header`
  .hero {
    position: fixed;
    height: 100vh;
    width: 100%;
    border: 1px solid green;
  }

  .section-center {
    position: realtive;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero-info {
    /* border: 3px solid red; */
    width: 100%;
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
    margin: 5rem 0;
    max-width: 14rem;
  }

  .btn-projects {
    font-size: 1em;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    padding: 1.2em 1.5em;
    color: var(--clr-white);
    transition: transform 0.1s ease-in;
    border: 1.5px solid var(--clr-primary);
    background-color: transparent;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .btn-container:hover {
    background-clip: padding-box;
    cursor: pointer;
    /* transform: scale(1); */
  }

  /* .btn-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    z-index: -1;
    border: 1px solid var(--clr-primary);
    opacity: -1;
    padding: 10px 20px;
  } */

  /* .btn-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    z-index: 1;
    border: 1px solid var(--clr-primary);
    opacity: -1;
    padding: 10px 20px;
  } */

  .btn-container:hover::before {
    animation: pulse 750ms ease-in-out infinite;
  }

  .btn-container:hover::after {
    animation: pulse 750ms ease-in infinite;
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
      padding: 1.8em 2.5em;
      letter-spacing: 1.3px;
    }
  }

  @media screen and (min-width: 720px) {
    .hero-info {
      padding-left: 8rem;
    }

    .btn-container {
      margin: 5rem 0rem;
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
    .hero-info {
      left: 5%;
    }

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
      transform: scale(1);
      outline: 2px solid var(--clr-primary);
      filter: blur(2px);
      scale: 0.95;
    }

    100% {
      opacity: 0;
      transform: scale(1.2);
      outline: 0.1px solid var(--clr-primary);
      filter: blur(5px);
      scale: 1.1;
    }
  }
`;

export default Wrapper;
