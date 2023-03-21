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

  .home-btns {
    max-width: 10rem;
    font-size: 1em;
    padding: 0.8em;
    margin: 2rem 0;
    border-radius: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    color: #fff;
    transition: var(--transition);
    background-color: var(--clr-primary);
  }

  .btn-projects {
  }

  .home-btns:hover {
    cursor: pointer;
    box-shadow: 2px 2px 5px var(--clr-font);
    transform: translateY(-5px);
  }

  //? Button Styles from Linkedin Site
  /* element.style {
    height: min-content;
    border-radius: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-decoration-line: none;
    background-color: #0a66c2;
    color: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: #0a66c2;
    line-height: 1.25;
    min-height: auto!important;
} */

  //$  ================================================= End Button Styles ============================================ //

  @media screen and (min-width: 450px) {
    .hero-icons {
      font-size: 1.8rem;
    }

    .hero-heading::after {
      height: 1.8rem;
    }
  }

  @media screen and (min-width: 720px) {
    h1 {
      margin-bottom: 1.5rem;
    }

    .hero-sub-heading {
      line-height: 2.5rem;
    }

    .home-btns {
      gap: 1.5rem;
      padding: 1rem 0;

      .btn-1,
      .btn-2 {
        max-width: 15rem;
        padding: 0.8rem 1.3rem;
        font-size: 1rem;
        font-weight: var(--font-weight-400);
      }
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

    .home-btns {
      gap: 2rem;
      padding: 1.5rem 0;
    }

    .social-icon {
      font-size: 2rem;
    }

    .social-icon:hover {
      transform: scale(1.2);
    }

    .hero {
      background-size: cover;
    }
  }
`;

export default Wrapper;
