import React from "react";
import styled from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../ContextAPI";

const BurgerMenuButton = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div>
        <button
          className={
            openSidebar ? "show-sidebar hide-nav" : "nav-btn hide-sidebar"
          }
          id="nav-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .nav-btn {
    background-color: transparent;
    border-color: transparent;
    color: var(--clr-white);
    font-size: 2rem;
    cursor: pointer;
    padding-right: 2rem;
    /* border: var(--border-red); */
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

export default BurgerMenuButton;
