import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import links from "../pageLinks";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const handleClick = () => {
    setOpenSidebar(false);
  };

  console.log(links);

  return (
    <Wrapper>
      <div>
        <aside
          className={openSidebar ? "show-sidebar" : "hide-sidebar"}
          id="sidebar"
        >
          <div>
            <button className="close-btn" onClick={handleClick}>
              <FontAwesomeIcon icon={faClose} id="close-btn" />
            </button>
            <ul className="sidebar-links">
              {links.map((link) => {
                const { id, href, section } = link;
                return (
                  <li key={id}>
                    <a href={href} onClick={handleClick}>
                      {section}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  aside {
    transition: transform 100ms ease-in;
  }

  .show-sidebar {
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
    transform: translateX(0%);
  }

  .hide-sidebar {
    transform: translateX(100%);
  }

  .sidebar-links {
    text-align: center;
    position: relative;
  }

  .sidebar-links a {
    position: abosolute;
    font-size: 2rem;
    text-transform: capitalize;
    /* transition: var(--transition); */
    color: var(--clr-white);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
    z-index: 1000;
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
    color: #bb2525;
    cursor: pointer;
    padding-right: 1rem;
  }

  .close-btn:hover {
    color: #e66b6b;
  }
`;

export default SideBar;
