import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    position: fixed;
    top: 45%;
    left: 1%;
    font-size: 1.8rem;
    width: 2.5rem;
    height: 2.5rem;
    outline: 2.5px solid var(--clr-font);
    border-radius: 50%;
    background-color: var(--clr-primary);
    z-index: 1000;
    text-align: center;
    opacity: 0;
  }

  .container:hover {
    cursor: pointer;
  }

  .container .share-button {
    /* margin: 0 auto; */
  }
`;

export default Wrapper;
