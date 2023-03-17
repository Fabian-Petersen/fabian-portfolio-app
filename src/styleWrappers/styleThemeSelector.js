import styled from "styled-components";

const Wrapper = styled.div`
  .theme {
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    background-color: var(--clr-primary-2);
  }

  .icon {
    justify-content: center;
  }

  .theme:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .theme {
      top: 1.5%;
      position: fixed;
      right: 1.5%;
    }
  }
`;

export default Wrapper;
