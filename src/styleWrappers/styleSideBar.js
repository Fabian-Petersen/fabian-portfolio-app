import styled from "styled-components";

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

export default Wrapper;
