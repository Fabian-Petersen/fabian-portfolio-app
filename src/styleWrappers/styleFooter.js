import styled from "styled-components";

const Wrapper = styled.footer`
  .footer {
    padding: 2rem;
    background-color: var(--clr-grey-head-1);
    display: grid;
    place-items: center;
    height: 10rem;
  }

  p {
    display: flex;
    gap: 0.6rem;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
`;

export default Wrapper;
