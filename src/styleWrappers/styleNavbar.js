import styled from "styled-components";

const Wrapper = styled.nav`
  .hide-nav {
    display: hidden;
  }

  .nav {
    display: flex;
    transition: var(--transition);
    color: white;
    align-items: center;
    height: 7rem;
  }

  ul li:hover {
    .facebook {
      color: #3b5999;
    }

    .twitter {
      color: #46c1f6;
    }
  }

  .nav-logo:hover {
    cursor: pointer;
  }

  .nav-btns {
    display: flex;
    margin-left: auto;
    width: 5rem;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-right: 2rem;
  }

  .theme {
    font-size: 1.5rem;
  }

  .nav-logo {
    max-height: 10rem;
  }

  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }

    // Styling the logo
    .container {
      padding-left: 2.5rem;
    }
    .nav-logo {
      height: 5rem;
      padding-left: 2rem;
    }

    .active {
      color: yellow;
    }
  }

  /* Fixed Navbar */
  .navbar-fixed {
    position: fixed;
    /* top: 0; */
    /* left: 0; */
    /* width: 100%; */
    /* z-index: 2;
  }

  .nav-fixed-active {
    /* position: fixed; */
    background-color: transparent;
    /* top: 0; */
    /* left: 0; */
    /* width: 100%; */
    z-index: 20;
    padding-top: 1rem;
  }
`;

export default Wrapper;
