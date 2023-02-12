import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <div className="container">
        {/* <svg height="100" width="100">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="white"
            stroke-width="2"
            fill="transparent"
          />
        </svg> */}
        <span className="letter-f">F</span>
        <span className="letter-p">P</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    position: relative;
    /* border: 1px solid white; */
    width: 3.5rem;
    height: 3.5rem;
  }

  span {
    font-family: var(--ff-logo);
    color: white;
  }

  .letter-f {
    position: absolute;
    left: 40%;
    top: 45%;
    font-size: 1.8rem;
    transform: translate(-50%, -50%);
  }

  .letter-p {
    color: var(--clr-yellow);
    position: absolute;
    left: 55%;
    top: 75%;
    font-size: 1.8rem;
    transform: translate(-50%, -50%);
  }
`;

export default Logo;
