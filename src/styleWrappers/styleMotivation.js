import styled from "styled-components";

const Wrapper = styled.div`
  .container-motivation {
    opacity: 1;
    transition: all 0.2s ease-in;
  }

  .container {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(---clr-font);
    font-size: clamp(1rem, 0.6vw + 0.2rem, 1.3rem);
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    /* border: 1px solid white; */
    line-height: 15px;
    letter-spacing: 2px;
    text-align: center;
  }

  .quote {
    font-size: 0.8em;
  }

  .author {
    font-size: 0.7em;
  }
`;
export default Wrapper;
