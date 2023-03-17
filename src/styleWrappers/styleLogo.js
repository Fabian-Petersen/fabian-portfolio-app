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
    font-size: 2em;
  }

  .letter-p {
    color: var(--clr-yellow);
    position: absolute;
    left: 65%;
    top: 100%;
    transform: translate(-50%, -50%);
    font-size: 2em;
  }
`;

export default Wrapper;
