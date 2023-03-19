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
    flex: 1 1 0;
    width: max-content;
    padding: 0.8rem 0rem;
    color: var(--clr-font);
  }

  button.active {
    background-color: var(--clr-primary);
    outline: 2.5px solid var(--clr-font);
  }

  @media screen and (min-width: 450px) {
    .btn-container {
      gap: 1rem;
      padding: 0.7em 1em;
      font-size: 0.7rem;
    }

    button {
      max-width: 9rem;
    }
  }
`;

export default Wrapper;
