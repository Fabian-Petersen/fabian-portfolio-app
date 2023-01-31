import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { navIcons } from "../assets/images/icons";

const { house, user, clipboard, phone } = navIcons;

const ScrollNav = () => {
  return (
    <Wrapper>
      <div className='container'>
        <nav className='nav-container'>
          <FontAwesomeIcon className='icon' icon={house} />
          <FontAwesomeIcon className='icon' icon={user} />
          <FontAwesomeIcon className='icon' icon={clipboard} />
          <FontAwesomeIcon className='icon' icon={phone} />
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .container {
    gap: 2rem;
    top: 85%;
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    z-index: 1000;
  }

  .nav-container {
    justify-content: center;
    display: flex;
    height: 15rem;
    gap: 4rem;
    ${"" /* flex-direction: column; */}
    padding: 1rem;
  }

  .icon {
    color: white;
    opacity: 40%;
    font-size: 2.5rem;
    position: relative;
  }

  .icon:hover {
    cursor: pointer;
    scale: 1.1;
    opacity: 100%;
  }

  .icon::before {
    content: "";
    position: absolute;
    color: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
`;

export default ScrollNav;
