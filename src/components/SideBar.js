import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrapper>
      <aside className="sidebar" id="sidebar">
        <div>
          <button className="close-btn" id="close-btn">
            <i className="fas fa-times"></i>
          </button>
          <ul className="sidebar-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com" className="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#1" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#1" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#1" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-par-10);
    z-index: 10;
    display: grid;
    /* 
  Can use place-items: center which do vertical and horizontal alignment 
  align-items: center;
  justify-content: center; */
    place-items: center;
    transition: var(--transition);
    transform: translateX(-100%);
  }

  .show-sidebar {
    transform: translateX(0);
  }

  .sidebar-links {
    text-align: center;
  }

  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    transition: var(--transition);
    color: var(--clr-grey-par-5);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }

  .social-icons {
    display: grid;
    margin-top: 3rem;
    width: 20rem;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
  }

  .social-icon {
    font-size: 1.5rem;
    color: var(--clr-white);
    transition: var(--transition);
  }

  .social-icon:hover {
    color: var(--clr-yellow);
    transform: scale(1.1);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    font-size: 3rem;
    border: transparent;
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }

  .close-btn:hover {
    color: #e66b6b;
  }
`;

export default SideBar;
