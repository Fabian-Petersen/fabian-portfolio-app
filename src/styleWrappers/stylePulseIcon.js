import styled from "styled-components";

const Wrapper = styled.div`
  .project-container {
    display: flex;
    justify-content: center;
    /* border: var(--border-red); */
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .project-container:hover .project-code-link {
    color: yellow;
    cursor: pointer;
  }

  .pulse {
    position: relative;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  .code-icon {
    position: relative;
    color: white;
    font-size: 2rem;
    color: var(--clr-white);
    /* transform: translateX(1px); */
  }

  .demo-btn {
    padding: 0.4rem 0.8rem;
    background-color: var(--clr-white);
    color: var(--clr-red);
    border-radius: 20px;
    position: relative;
    border: 1px solid var(--clr-red);
  }

  .demo-btn:hover {
    cursor: pointer;
    background-color: var(--clr-red);
    color: var(--clr-white);
  }

  /* .demo-btn :is(::before, ::after) {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  } */

  .demo-btn::before,
  .demo-btn::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .pulse::before,
  .pulse::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .code-icon:hover {
    cursor: pointer;
    color: var(--clr-yellow);
    opacity: 1;
  }

  .pulse:hover::after {
    animation: pulse 850ms infinite;
  }

  .demo-btn:hover::after {
    animation: pulseBtn 850ms infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(0.8);
      outline: 5px solid var(--clr-yellow);
    }

    100% {
      opacity: 0;
      transform: scale(1.5);
      outline: 0px solid yellow;
    }
  }

  @keyframes pulseBtn {
    0% {
      opacity: 1;
      transform: scale(0.8);
      outline: 8px solid var(--clr-red);
    }

    100% {
      opacity: 0;
      transform: scale(1.5);
      outline: 0px solid var(--clr-red);
    }
  }
`;

export default Wrapper;
