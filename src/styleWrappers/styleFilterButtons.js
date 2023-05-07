import styled from "styled-components";

const Wrapper = styled.div`
  .btn-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
    gap: 0.5rem;
  }

  button {
    font-size: var(--fs-heading-h4);
    flex: 1 1 0;
    width: max-content;
    padding: 0.8rem 0rem;
    color: var(--clr-white);
    background-color: var(--clr-primary);
    border: none;
    text-transform: uppercase;
    max-width: 8rem;
  }

  button.active {
    background-color: var(--clr-font);
    color: var(--clr-primary);
  }

  button:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 450px) {
    .btn-container {
      gap: 1rem;
    }

    button {
      /* flex: 1 1 0; */
      padding: 1em 1.2em;
      max-width: 12rem;
    }
  }

  @media screen and (min-width: 667px) {
    .btn-container {
      max-width: 50%;
    }

    button {
      font-size: 1rem;
      /* max-width: 10rem; */
    }
  }

  @media screen and (min-width: 992px) {
    .btn-container {
      /* max-width: 50%; */
      gap: 2rem;
    }

    button {
      font-size: 1.5rem;
      max-width: 15rem;
      padding: 0.8em 1em;
    }
  }
`;

export default Wrapper;
