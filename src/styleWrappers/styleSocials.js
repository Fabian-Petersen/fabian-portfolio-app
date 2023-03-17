import styled from "styled-components";

const Wrapper = styled.div`
  .social-icons {
    margin-bottom: 1.5rem;
    display: flex;
    font-size: 2rem;
    gap: 2rem;
  }

  .icon {
    transition: all 0.15s ease-in;
    color: var(--clr-white);
  }

  .social-icon {
    animation: colorAnimation 1000ms steps(5);
  }

  .icon:hover {
    transform: scale(1.1);
    color: var(--clr-yellow);
    transform: translateY(-2.5px);
  }

  @keyframes colorAnimation {
    to {
      left: 100%;
      color: var(--clr-yellow);
    }
  }
`;

export default Wrapper;
