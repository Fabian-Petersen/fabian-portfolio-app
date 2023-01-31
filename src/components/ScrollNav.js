import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import links from "../pageLinks";

const ScrollNav = () => {
  return (
    <Wrapper>
      <div className='container'>
        <nav className='nav-container'>
          {links.map((link) => {
            const { id, name, icon } = link;
            return (
              <>
                <a href={id}>
                  <FontAwesomeIcon key={name} className='icon' icon={icon} />;
                </a>
              </>
            );
          })}
        </nav>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .container {
    opacity: 0;
  }

  .nav-container {
    justify-content: center;
    display: flex;
    height: 15rem;
    gap: 4rem;
    flex-direction: column;
    padding: 1rem;
  }

  .icon {
    color: white;
    opacity: 50%;
    font-size: 2rem;

    &:hover {
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      gap: 2rem;
      top: 50%;
      right: 2%;
      position: fixed;
      transform: translateY(-50%);
      opacity: 1;
      z-index: 1000;
    }
  }
`;

export default ScrollNav;
