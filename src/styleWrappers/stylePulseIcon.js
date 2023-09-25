import styled from "styled-components";

const Wrapper = styled.div`
  .project-container {
    display: flex;
    justify-content: center;
    z-index: 100;
    /* border: 1px solid yellow; */
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .project-container:hover .project-code-link {
    color: var(--clr-primary);
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
    color: var(--clr-font);
    font-size: 2rem;
    color: var(--clr-font);
  }

  .demo-btn {
    padding: 0.4rem 0.8rem;
    background-color: var(--clr-font);
    color: var(--clr-primary);
    border-radius: 20px;
    position: relative;
    border: 1px solid var(--clr-primary);
  }

  .demo-btn:hover {
    cursor: pointer;
    background-color: var(--clr-primary);
    color: var(--clr-font);
  }

  /* 
  .demo-btn :is(::before, ::after) {
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
    position: absolute;
    /* color: var(--clr-primary); */
    opacity: 1;
  }

  .code-icon::before:hover {
    position: absolute;
    border-radius: 100%;
    background-color: var(--clr-primary);
    z-index: -100;
  }

  .pulse:hover::after {
    animation: pulse 750ms infinite;
  }

  .demo-btn:hover::after {
    animation: pulseBtn 750ms infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(0.8);
      outline: 8px solid var(--clr-primary);
    }

    100% {
      opacity: 0;
      transform: scale(1.8);
      outline: 0px solid var(--clr-primary);
    }
  }

  @keyframes pulseBtn {
    0% {
      opacity: 1;
      transform: scale(0.8);
      outline: 8px solid var(--clr-primary);
    }

    100% {
      opacity: 0;
      transform: scale(1.8);
      outline: 0px solid var(--clr-primary);
    }
  }
`;

export default Wrapper;
