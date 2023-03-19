import styled from "styled-components";

const Wrapper = styled.div`
  .nav-btn {
    background-color: transparent;
    position: fixed;
    right: 1%;
    top: 2%;
    border-color: transparent;
    color: var(--clr-white);
    font-size: 2.5rem;
    cursor: pointer;
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
