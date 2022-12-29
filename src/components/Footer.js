import React from "react";
import styled from "styled-components";
import Socials from "./Socials";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <Socials />
        <p>
          <span id="date">&copy; {new Date().getFullYear()}</span> Fabian
          Petersen.
          <span>All Rights Reserved</span>
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    padding: 2rem;
    background-color: var(--clr-grey-head-1);
    display: grid;
    place-items: center;
  }

  p {
    display: flex;
    gap: 0.6rem;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Footer;
