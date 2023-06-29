import styled from "styled-components";

const Wrapper = styled.nav`
  .hide-nav {
    display: hidden;
  }

  .nav {
    height: 6rem;
    transition: var(--transition);
    /* box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.1); */
    width: 100%;
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

  .nav-center {
    display: flex;
    color: white;
    width: 100%;
    /* border: 1px solid yellow; */
    align-items: center;
  }

  .nav-btns {
    display: flex;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .theme {
    font-size: 1.5rem;
  }

  .nav-logo {
    width: fit-content;
    height: 10rem;
  }

  @media screen and (min-width: 768px) {
    .nav {
      background-color: var(--clr-bg);
      margin: 0 auto;
    }

    .nav-btn {
      display: none;
    }

    .nav-logo {
      height: 5rem;
    }

    .nav-btns {
      display: flex;
      margin-left: auto;
    }

    .nav-center {
      padding: 0 2.5rem;
    }
    .active {
      color: yellow;
    }
  }

  /* Fixed Navbar */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .nav-fixed-active {
    position: fixed;
    background-color: transparent;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    padding-top: 1rem;
  }
`;

export default Wrapper;
