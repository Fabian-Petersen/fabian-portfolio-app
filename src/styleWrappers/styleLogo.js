import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    position: relative;
    /* border: 1px solid white; */
    width: 6rem;
    height: 6rem;
    font-size: var(--fs-logo);
  }

  span {
    font-family: var(--ff-logo);
    color: var(--clr-font);
  }

  .container .letter-f {
    position: absolute;
    width: 100%;
    /* left: 10%;
    top: 5%; */
    /* transform: translate(-50%, -50%); */
    /* font-size: 0.8em; */
    font-weight: var(--font-weight-800);
  }

  .letter-p {
    color: var(--clr-primary);
    position: absolute;
    width: 100%;
    left: 15%;
    top: 15%;
    /* transform: translate(-50%, -50%); */
    /* font-size: 0.8em; */
    font-weight: 700;
  }
`;

export default Wrapper;
