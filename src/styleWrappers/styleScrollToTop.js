import styled from "styled-components";

const Wrapper = styled.div`
  .scrollToTop {
    position: fixed;
    right: 1%;
    font-size: 2rem;
    top: 90%;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    border-radius: 50%;
    text-align: center;
    color: var(--clr-primary);
    z-index: 1000;
    transition: opacity 1s ease-in;
    outline: 2.5px solid var(--clr-font);
  }

  .scrollToTop::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--clr-font);
    transform: scale(0.9);
    z-index: -1;
  }

  .hide {
    opacity: 0;
    transition: hideButton 1s ease-out;
  }

  .scrollToTop:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s ease-in;
    animation: pulse 1s ease-in alternate infinite;
  }

  @media screen and (min-width: 450px) {
    .scrollToTop {
      font-size: 2.5rem;
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      border-radius: 50%;
      text-align: center;
      background-color: var(--clr-primary-2);
    }
  }

  @keyframes pulse {
    from {
      transform: scale(1);
      opacity: 1;
    }

    to {
      transform: scale(1.15);
      opacity: 0.8;
    }
  }
`;

export default Wrapper;
