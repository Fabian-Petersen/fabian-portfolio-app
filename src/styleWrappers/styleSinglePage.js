import styled from "styled-components";

const Wrapper = styled.main`
  .desc {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: var(--fs-heading-h2);
    font-weight: var(--font-weight-800);
  }

  h3 {
    font-size: var(--fs-heading-h3);
    font-weight: var(--font-weight-400);
  }

  .hero-btn-2 {
    padding: 1rem 2.5rem;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 3rem 0rem;
  }

  .content-container p {
    text-align: left;
  }

  .btn-singlePage {
    transition: all 0.25s ease-in;
    padding: 1.5rem 5rem;
    color: var(--clr-font);
    text-align: center;
    font-size: var(--fs-heading-h4);
  }

  button:hover {
    cursor: pointer;
    color: var(--clr-primary);
  }

  hr {
    width: 100%;
    margin-bottom: 1.5rem;
    border: 0.2px solid var(--clr-about-lines);
  }
`;

export default Wrapper;
