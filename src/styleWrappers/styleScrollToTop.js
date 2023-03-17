import styled from "styled-components";

const Wrapper = styled.div`
  .scrollToTop {
    font-size: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    background-color: var(--clr-primary-2);
  }

  .scrollToTop:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .scrollToTop {
      top: 90%;
      position: fixed;
      right: 1.5%;
      z-index: 1000;
    }
  }
`;

export default Wrapper;
