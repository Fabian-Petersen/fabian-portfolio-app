import React from "react";
import styled from "styled-components";
// import logo from "../assets/images/fabian-logo-vivaldi.svg";
import ThemeSelector from "./ThemeSelector";
import links from "../pageLinks";
import { useGlobalContext } from "../ContextAPI";
import BurgerMenuButton from "./BurgerMenuButton";
import { useActiveMenu } from "react-active-menu";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();
  const { registerTrigger } = useActiveMenu();
  // console.log(theme);

  return (
    <Wrapper>
      <nav className="nav nav-fixed nav-fixed-active" id="nav">
        <div className="nav-center">
          <a href="/#home">
            {/* <img src={logo} className="nav-logo" alt="nav-logo" /> */}
            <Logo />
          </a>
          <div className="nav-btns">
            <ThemeSelector theme={theme} setTheme={setTheme} />
            <BurgerMenuButton />
          </div>
          <ul className="nav-links triggers">
            {links.map((link) => {
              const { id, section, href, icon, className } = link;
              return (
                <li
                  className={className}
                  key={id}
                  ref={registerTrigger({ section })}
                >
                  <a href={href}>
                    <FontAwesomeIcon icon={icon} className="icon" />
                  </a>
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
    box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.1);
    width: 100%;
    /* border: 1px solid white; */
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

  .nav-links {
    display: none;
  }

  .nav-center {
    display: flex;
    color: white;
    width: 100%;
    /* border: var(--border-red); */
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
    height: 5rem;
    /* border: var(--border-red); */
  }

  .show-sidebar {
    /* transform: translateX(0); */
  }

  .hide-sidebar {
    /* transform: translateX(20%); */
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
      position: fixed;
      top: 45%;
      right: 1%;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      justify-content: space-around;
      justify-content: center;
      text-align: center;
    }

    .nav-btns {
      display: flex;
      margin-left: auto;
    }

    ul li {
      background-color: var(--clr-primary-2);
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    .nav-links a {
      position: relative;
      text-transform: capitalize;
      font-weight: var(--font-weight-400);
      color: var(--clr-white);
      letter-spacing: var(--spacing);
    }

    /* .nav-links a::after {
      content: " ";
      position: absolute;
      background-color: var(--clr-red);
      height: 3px;
      width: 0;
      left: 0;
      bottom: -10px;
      transition: var(--transition);
    } */

    .nav-links a:hover::after {
      width: 100%;
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
    //background-color:;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
`;

export default Navbar;
