import styled from "styled-components";

const Wrapper = styled.div`
  .theme {
    position: fixed;
    right: 1%;
    top: 15%;
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--clr-primary);
    outline: 2.5px solid var(--clr-font);
  }

  .icon {
    color: var(--clr-font);
    position: relative;
  }

  .icon::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--clr-font);
    background-color: var(--clr-font);
    z-index: -1;
  }

  .theme:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 450px) {
    .theme {
    }
  }

  @media screen and (min-width: 768px) {
    .theme {
      width: 2.5rem;
      height: 2.5rem;
      top: 1.5%;
    }
  }
`;

export default Wrapper;
