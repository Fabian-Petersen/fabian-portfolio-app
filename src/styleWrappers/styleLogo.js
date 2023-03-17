import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    position: relative;
    /* border: 1px solid white; */
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }

  span {
    font-family: var(--ff-logo);
    color: white;
  }

  .letter-f {
    position: absolute;
    left: 40%;
    top: 65%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    font-weight: 700;
  }

  .letter-p {
    color: var(--clr-primary);
    position: absolute;
    left: 65%;
    top: 100%;
    transform: translate(-50%, -50%);
    font-size: 1.5em;
    font-weight: 700;
  }
`;

export default Wrapper;
