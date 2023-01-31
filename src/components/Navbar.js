import React from "react";
import styled from "styled-components";
import logo from "../assets/images/fabian-logo-vivaldi.svg";
import ThemeSelector from "./ThemeSelector";
import links from "../pageLinks";
import { useGlobalContext } from "../ContextAPI";
import BurgerMenuButton from "./BurgerMenuButton";

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();
  return (
    <Wrapper>
      <nav className='nav navbar-fixed' id='nav'>
        <div className='nav-center'>
          <a href='/#home'>
            <img src={logo} className='nav-logo' alt='nav-logo' />
          </a>
          <div className='nav-btns'>
            <ThemeSelector
              theme={theme}
              setTheme={setTheme}
              className={theme ? "theme theme-dark" : "theme theme-light"}
            />
            <BurgerMenuButton />
          </div>
          <ul className='nav-links'>
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
  .hide-nav {
    display: hidden;
  }

  .nav {
    height: 5rem;
    transition: var(--transition);
    /* border: var(--border-white); */
    width: 100%;
  }

  .active {
    color: yellow;
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
    /* border: var(--border-red); */
    align-items: center;
  }

  .nav-btns {
    display: flex;
    gap: 2rem;
    margin-left: auto;
    border: var(--border-white);
    align-items: center;
    justify-content: center;
  }

  .theme {
    font-size: 1.5rem;
  }

  .nav-logo {
    width: fit-content;
    height: 5rem;
    /* border: var(--border-red); */
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
      gap: 2rem;
      justify-content: space-around;
    }

    .nav-btns {
      display: flex;
      margin-left: auto;
      gap: 2rem;
      margin-right: 2rem;
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
