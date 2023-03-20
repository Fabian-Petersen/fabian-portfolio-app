import styled from "styled-components";

const Wrapper = styled.ul`
  ul {
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;

    li {
      text-align: center;
      width: 2.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      font-size: 1.5rem;
      border-radius: 50%;
      background-color: var(--clr-primary);
    }
  }

  .icon {
    color: var(--clr-font);
  }

  .tooltip {
    display: none;
  }

  @media screen and (min-width: 760px) {
    ul {
      /* border: 1px solid red; */
      height: 5rem;
      align-content: flex-end;
      li {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.7rem;
      }
    }

    .icon {
      color: var(--clr-white);
    }

    li:hover {
      transform: scale(1.1);
      transform: translateY(-2.5px);
    }

    //Tooltip Styles
    .icon-container {
      display: flex;
      flex-direction: column;
      /* text-align: center; */
      align-items: center;
      justify-content: center;
      height: 100%;
      /* border: 1px solid blue; */
    }

    .icon-container:hover .tooltip {
      animation: tooltipAnimation 200ms forwards;
    }

    .tooltip {
      position: relative;
      font-size: 0.8rem;
      top: 0;
      color: blue;
      opacity: 0;
      background: var(--clr-white);
      padding: 0.2rem 0.5rem;
      border-radius: 10rem;
      margin-bottom: 0.2rem;
      text-transform: capitalize;

      .tooltip__point {
        position: absolute;
        background-color: var(--clr-white);
        color: red;
        width: 0.8rem;
        z-index: -1;
        height: 0.8rem;
        left: 40%;
        top: 65%;
        transform: translate(-50%, -50%);
        transform: rotate(-45deg);
      }
    }
  }

  @keyframes tooltipAnimation {
    from {
      top: 60px;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes startAnimation {
    from {
      opacity: 0;
      transform: translateY(5rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default Wrapper;
