import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import links from "../pageLinks";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const handleClick = () => {
    setOpenSidebar(false);
  };

  return (
    <Wrapper>
      <aside
        className={openSidebar ? "show__sidebar" : "hide__sidebar"}
        id='sidebar'>
        <div>
          <button className='close-btn' onClick={handleClick}>
            <FontAwesomeIcon icon={faClose} id='close-btn' />
          </button>
          <ul className='sidebar-links'>
            {links.map((link) => {
              const { id, name } = link;
              return (
                <li key={id}>
                  <a href={id} onClick={handleClick}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .show__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-bg-light);
    z-index: 10;
    display: grid;
    /* border: var(--border-white); */
    /* 
  Can use place-items: center which do vertical and horizontal alignment 
  align-items: center;
  justify-content: center; */
    place-items: center;
    transition: 1000ms ease-in;
    transform: translateX(0);
  }

  .hide__sidebar {
    transform: translateX(-100%);
  }

  .sidebar-links {
    text-align: center;
  }

  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    transition: var(--transition);
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  .sidebar-links a:hover {
    color: var(--clr-red);
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
    padding-right: 1rem;
  }

  .close-btn:hover {
    color: #e66b6b;
  }
`;

export default SideBar;
