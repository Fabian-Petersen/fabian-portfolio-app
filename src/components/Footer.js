import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/images/icons";
import "../index.css";

const Footer = () => {
  const { faFacebook, faTwitter, faLinkedin, faGithub } = Icons;
  return (
    <Wrapper>
      <footer className="footer">
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#1" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#1" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href="#1" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
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

  .social-icons {
    margin-bottom: 1.5rem;
    display: flex;
    font-size: 2rem;
    gap: 2rem;
  }

  .footer .social-icon {
    color: var(--clr-white);
  }

  .footer .social-icon:hover {
    transform: scale(1.1);
    color: var(--clr-yellow);
  }

  p {
    display: flex;
    gap: 0.6rem;
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Footer;
