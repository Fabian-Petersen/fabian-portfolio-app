import styled from "styled-components";

const Wrapper = styled.div`
  ul {
    position: fixed;
    list-style: none;
    top: 38%;
    left: 1%;
    width: 10rem;
    height: 25rem;
    // border: 1px solid blue;
  }

  ul li {
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    text-decoration: none;
    padding: 0.3em;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0;
    color: var(--clr-font);
  }

  ul li:not(.ellipsis, .xmark) {
    outline: 2.5px solid var(--clr-font);
  }

  ul li:not(.ellipsis, .xmark):before {
    content: "";
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    filter: blur(1.5px);
    border-radius: 50%;
    padding: 0.2em;
    z-index: -1;
  }

  ul li:not(.ellipsis, .xmark):hover {
    box-shadow: 0 0 20px var(--clr-primary);
    outline: 2.5px solid var(--clr-primary);
    transform: scale(1.1);
    transition: transform ease 0.3s;
  }

  ul li a {
    text-align: center;
    line-height: 1em;
  }

  .ellipsis {
    top: 50%;
    animation: menuCloseAnimation 0.5s ease-in-out forwards;
    opacity: 1;
    z-index: 2000;
    outline: 2.5px solid var(--clr-font);
  }

  .xmark {
    animation: menuOpenAnimation 0.5s ease-in forwards;
    z-index: 2000;
    opacity: 1;
    outline: 2.5px solid var(--clr-font);
  }

  .ellipsis > a,
  .xmark > a {
    color: var(--clr-font);
  }

  .ellipsis:hover {
    cursor: pointer;
  }

  /* Icon Open Animations */
  .facebookOpen {
    animation: facebookOpenAnimation 0.5s ease-in-out forwards;
  }

  .twitterOpen {
    animation: twitterOpenAnimation 0.5s ease-in-out 0.2s forwards;
  }

  .linkedInOpen {
    animation: linkedInOpenAnimation 0.5s ease-in-out 0.2s forwards;
  }

  .gitHubOpen {
    animation: gitHubOpenAnimation 0.5s ease-in-out forwards;
  }

  /* Icon Close Animations */

  .facebookClose {
    animation: facebookCloseAnimation 0.5s ease-in-out 0.2s forwards;
  }

  .twitterClose {
    animation: twitterCloseAnimation 0.5s ease-in-out forwards;
  }

  .linkedInClose {
    animation: linkedInCloseAnimation 0.5s ease-in-out forwards;
  }

  .gitHubClose {
    animation: gitHubCloseAnimation 0.5s ease-in-out 0.2s forwards;
  }

  @keyframes menuOpenAnimation {
    from {
      top: 50%;
      left: 0%;
    }

    to {
      top: 50%;
      left: 10%;
      transform: scale(1.1) rotate(360deg);
    }
  }

  /* ========================== Menu Button Animation ============================= */

  @keyframes menuCloseAnimation {
    from {
      top: 50%;
      left: 10%;
    }

    to {
      top: 50%;
      left: 0%;
      transform: scale(1) rotate(-360deg);
    }
  }

  /* ========================== Social Links Animation ============================ */

  /* FaceBook */
  @keyframes facebookOpenAnimation {
    from {
      top: 50%;
      oapcity: 0;
    }

    to {
      top: 0%;
      opacity: 1;
    }
  }

  @keyframes facebookCloseAnimation {
    from {
      top: 0;
      opacity: 1;
    }

    to {
      top: 50%;
      opacity: 0;
    }
  }

  /* Twitter */
  @keyframes twitterOpenAnimation {
    from {
      top: 50%;
      opacity: 0;
    }

    to {
      top: 25%;
      opacity: 1;
    }
  }

  @keyframes twitterCloseAnimation {
    from {
      top: 25%;
      opacity: 1;
    }

    to {
      top: 50%;
      opacity: 0;
    }
  }

  /* LinkedIn */
  @keyframes linkedInOpenAnimation {
    from {
      top: 50%;
      opaccity: 0;
    }

    to {
      top: 75%;
      opacity: 1;
    }
  }

  @keyframes linkedInCloseAnimation {
    from {
      top: 75%;
      opacity: 1;
    }

    to {
      top: 50%;
      opacity: 0;
    }
  }

  /* GitHub */
  @keyframes gitHubOpenAnimation {
    from {
      top: 50%;
      opacity: 0;
    }

    to {
      top: 100%;
      opacity: 1;
    }
  }

  @keyframes gitHubCloseAnimation {
    from {
      top: 100%;
      opacity: 1;
    }

    to {
      top: 50%;
      opacity: 0;
    }
  }
`;
export default Wrapper;
