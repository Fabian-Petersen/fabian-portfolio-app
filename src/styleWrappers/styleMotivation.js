import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    position: absolute;
    top: calc(100% - 6rem);
    left: 0;
    width: 100%;
    transform: translate(-50%, -50%);
    /* border: 1px solid green; */
    height: 5rem;
    font-size: clamp(1.5rem, 0.8vw + 0.2rem, 2rem);
  }

  .text-container {
    color: var(---clr-font);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    letter-spacing: 2px;
    /* border: 1px solid orange; */
    text-align: center;
  }

  .quote {
    line-height: 15px;
    font-size: 0.8em;
  }

  .author {
    font-size: 0.7em;
  }
`;
export default Wrapper;
