import styled from "styled-components";

const Wrapper = styled.main`
  .desc {
    margin-bottom: 3rem;
  }

  .hero-btn-2 {
    padding: 1rem 2.5rem;
  }

  button {
    width: max-content;
    padding: 0.8rem 0rem;
    color: var(--clr-white);
    background-color: var(--clr-primary);
    border-radius: 5px;
    border: none;
    transition: all 0.25s ease-in;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px var(--clr-primary);
    background-color: var(--clr-white);
    color: var(--clr-primary);
  }

  button:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
