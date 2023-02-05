import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { useObserverContext } from "../ObserverAPI";
import links from "../pageLinks";

const ScrollNav = () => {
  const { activeSection } = useObserverContext();

  const active = activeSection.filter((item) => item.active === true);
  const test = active.forEach((item) => {
    if (item.active === true) {
      return item.section;
    }
  });
  console.log(activeSection);
  console.log(test);

  return (
    <Wrapper>
      <div className='container'>
        <nav className='nav-container'>
          {links.map((item, id, section) => {
            const { href, icon } = item;
            return (
              <a key={id} href={href}>
                <FontAwesomeIcon
                  className={active ? "icon-active" : "icon"}
                  icon={icon}
                />
                ;
              </a>
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

  .icon-active {
    color: var(--clr-yellow);
    font-size: 2rem;
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
