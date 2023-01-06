import React from "react";
import styled from "styled-components";
import logo from "../assets/images/fabian-logo-vivaldi.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeSelector from "./ThemeSelector";
import links from "../pageLinks";
import { useGlobalContext } from "../ContextAPI";

const Navbar = () => {
  const { theme, setTheme, openSidebar, setOpenSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <nav className="nav navbar-fixed" id="nav">
        <div className="nav-center">
          <img src={logo} className="nav-logo" alt="nav-logo" />
          <ThemeSelector theme={theme} setTheme={setTheme} />
          <button
            className={openSidebar ? "show-sidebar" : "nav-btn hide-sidebar"}
            id="nav-btn"
            onClick={() => setOpenSidebar(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, name } = link;
              return (
                <li key={id}>
                  <a href={id}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  .nav {
    height: 5rem;
    transition: var(--transition);
    /* border: var(--border-white); */
    width: 100%;
  }

  .nav-logo:hover {
    cursor: pointer;
  }

  .nav-links {
    display: none;
  }

  .nav-center {
    display: flex;
    width: 100%;
    justify-content: space-between;
    /* border: var(--border-red); */
    align-items: center;
  }

  .nav-logo {
    width: fit-content;
    height: 5rem;
    /* border: var(--border-red); */
  }

  .nav-btn {
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-white);
    font-size: 2rem;
    cursor: pointer;
    padding-right: 2rem;
  }

  .show-sidebar {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    .nav {
      background-color: var(--clr-bg-dark);
      margin: 0 auto;
    }

    .nav-btn {
      display: none;
    }

    .nav-logo {
      height: 5rem;
    }

    .nav-links {
      display: flex;
      /* border: var(--border-red); */
      gap: 2rem;
      justify-content: space-around;
    }

    .nav-links a {
      position: relative;
      text-transform: capitalize;
      font-weight: bold;
      color: var(--clr-white);
      letter-spacing: var(--spacing);
    }

    .nav-links a::after {
      content: " ";
      position: absolute;
      background-color: var(--clr-red);
      height: 3px;
      width: 0;
      left: 0;
      bottom: -10px;
      transition: var(--transition);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-center {
      padding: 0 2.5rem;
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
`;

export default Navbar;
