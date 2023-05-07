import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(---clr-font);
    font-size: clamp(1rem, 0.6vw + 0.2rem, 1.3rem);
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    letter-spacing: 2px;
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
