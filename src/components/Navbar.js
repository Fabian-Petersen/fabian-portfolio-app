import React from "react";
import styled from "styled-components";
import logo from "../assets/images/fabian-logo-small.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import links from "../pageLinks";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  return (
    <Wrapper>
      <nav className="nav navbar-fixed" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="nav-logo" />
            <button
              className={openSidebar ? "show-sidebar" : "nav-btn hide-sidebar"}
              id="nav-btn"
              onClick={() => setOpenSidebar(true)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
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
  .nav-logo:hover {
    cursor: pointer;
  }

  .nav-links {
    display: none;
  }

  .nav {
    height: 5rem;
    padding: 1rem;
    display: grid;
    align-items: center;
    transition: var(--transition);
    /* border: var(--border-white); */
  }

  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .nav-logo {
    width: 50%;
  }

  .nav-btn {
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-white);
    font-size: 2rem;
    cursor: pointer;
    justify-self: end;
    padding-right: 2rem;
  }

  .show-sidebar {
    transform: translateX(0);
  }

  @media screen and (min-width: 768px) {
    .nav {
      background-color: var(--clr-bg-dark);
    }

    .nav-btn {
      display: none;
    }

    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      justify-items: right;
      -moz-column-gap: 2rem;
      column-gap: 1rem;
      justify-self: end;
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
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
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
