import styled from "styled-components";

// const boxShadowSize = "0px 0px 15px";
const defaultBoxStyle = "0px 0px 3rem rgba(118, 73, 242, 0.25)";
const boxShadowStyles = {
  figma: "0px 0px 15px rgba(118, 73, 242, 0.25)",
  html: "0px 0px 15px rgba(219, 77, 0, 0.25)",
  css: "0px 0px 15px rgba(2, 119, 189, 0.25)",
  javascript: "0px 0px 15px rgba(255, 214, 0, 0.25)",
  react: "0px 4px 6px rgba(121, 211, 222, 0.25)",
  github: "0px 4px 6px rgba(2, 119, 189, 0.25)",
  bootstrap: "0px 4px 6px rgba(103, 58, 180, 0.25)",
  sass: "0px 4px 6px rgba(228, 93, 139, 0.25)",
  vsc: "0px 4px 6px rgba(41, 179, 243, 0.25)",
  api: "0px 4px 6px rgba(196, 234, 227, 0.25)",
  responsive: "0px 4px 6px rgba(234, 84, 80, 0.25)",
};

const Wrapper = styled.section`
  .section-title {
    margin-bottom: 2rem;
  }

  .section-center {
    /* border: 1px solid red; */
    overflow-y: scroll;
    /* background-image: linear-gradient(
      rgba(0, 0, 255, 0.5),
        rgba(255, 255, 0, 0.5)
      ),
      url("../../media/examples/lizard.png"); */
    background-size: cover;
    background-position: center;
    ba article {
      p {
        font-size: var(--fs-p-text);
      }
    }

    .heading-mySkills {
      font-size: var(--fs-heading-h3);
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  .section-center::-webkit-scrollbar {
    display: none;
  }

  .about-info p {
    margin-bottom: 2rem;
    font-weight: normal;
  }

  .each-skill {
    .each-skill-heading {
      font-size: var(--fs-text);
      font-weight: normal;
      margin-bottom: 1rem;
    }

    .each-skill-container {
      display: flex;
      gap: 3rem;
      flex-wrap: wrap;
    }
  }

  .icon-container {
    position: relative;
    border-radius: 10px;
    width: 4.5rem;
    aspect-ratio: 1/1;
    background: linear-gradient(to bottom, #060606, rgba(255, 255, 255, 0.03));
    margin-bottom: 1rem;
  }

  .each-skill-icon {
    position: absolute;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    position: relative;
    .icon-name {
      text-align: center;
      font-size: var(--fs-text-sm);
      text-transform: uppercase;
    }
  }

  //Give glow effect on hover to each skill.
  .icon-container:hover {
    transform: translateY(-20px) scale(1.05);
  }

  .icon-container::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 10px;
    transition: all 200ms ease-in;

    &:hover::before {
      box-shadow: ${(props) =>
        props.styling ? boxShadowStyles[props.styling] : defaultBoxStyle};
    }
  }

  hr {
    width: 100%;
    margin-bottom: 1.5rem;
    border: 0.2px solid var(--clr-about-lines);
  }

  .active {
    color: yellow;
  }

  //* ============= Start of Media Queries for larger screens =============

  @media screen and (min-width: 760px) {
    .icon-container {
      width: 6rem;
      height: 6rem;
    }
  }

  @media screen and (min-width: 992px) {
    .icon-container {
      width: 8rem;
      height: 8rem;
    }

    .each-skill-container {
      gap: 4rem;
      margin: 2.5rem 0;
    }
  }

  .figma {
    box-shadow: 0px 4px 6px rgba(118, 73, 242, 0.25);
  }

  .html {
    box-shadow: 0px 4px 6px rgba(219, 77, 0, 0.25);
  }

  .css {
    box-shadow: 0px 4px 6px rgba(2, 119, 189, 0.25);
  }

  .javascript {
    box-shadow: 0px 4px 6px rgba(255, 214, 0, 0.25);
  }

  .react {
    box-shadow: 0px 4px 6px rgba(121, 211, 222, 0.25);
  }

  .github {
    box-shadow: 0px 4px 6px rgba(2, 119, 189, 0.25);
  }

  .bootstrap {
    box-shadow: 0px 4px 6px rgba(103, 58, 180, 0.25);
  }

  .sass {
    box-shadow: 0px 4px 6px rgba(228, 93, 139, 0.25);
  }

  .vsc {
    box-shadow: 0px 4px 6px rgba(41, 179, 243, 0.25);
  }

  .api {
    box-shadow: 0px 4px 6px rgba(196, 234, 227, 0.25);
  }

  .responsive {
    box-shadow: 0px 4px 6px rgba(234, 84, 80, 0.25);
  }
`;

export default Wrapper;
