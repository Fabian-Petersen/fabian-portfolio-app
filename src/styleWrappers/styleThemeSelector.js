import styled from "styled-components";

const Wrapper = styled.div`
  .theme {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--clr-primary);
    outline: 2.5px solid var(--clr-white);
  }

  .icon {
    color: var(--clr-black);
    position: relative;
  }

  .icon::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--clr-black);
    background-color: var(--clr-black);
    z-index: -1;
  }

  .theme:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .theme {
      top: 1.5%;
      position: fixed;
      right: 1%;
    }
  }
`;

export default Wrapper;
