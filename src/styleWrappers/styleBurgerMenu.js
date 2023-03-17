import styled from "styled-components";

const Wrapper = styled.div`
  .nav-btn {
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-white);
    font-size: 2rem;
    cursor: pointer;
    padding-right: 2rem;
    /* border: var(--border-red); */
  }

  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }

    .hide-nav {
      display: hidden;
    }
  }
`;

export default Wrapper;
