import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    /* border: var(--border-white); */
  }

  .section-title {
    margin-bottom: 2rem;
  }

  .section-center {
    article {
      p {
        font-size: 0.8rem;
      }
    }

    .heading-mySkills {
      /* border: var(--border-red); */
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  .about-info p {
    margin-bottom: 2rem;
    font-size: 0.8rem;
    font-weight: normal;
  }

  .each-skill {
    .each-skill-heading {
      font-size: 0.8rem;
      font-weight: normal;
      margin-bottom: 1rem;
    }

    .each-skill-container {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
  }

  .icon-container {
    position: relative;
    border-radius: 10px;
    width: 4rem;
    height: 4rem;
    background: linear-gradient(to bottom, #060606, rgba(255, 255, 255, 0.03));
    margin-bottom: 1rem;
  }

  .each-skill-icon {
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .container {
    .icon-name {
      text-align: center;
      font-size: 0.6rem;
      text-transform: uppercase;
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

  @media screen and (min-width: 475px) {
    .section-center {
      article {
        p {
          font-size: 0.9rem;
        }
      }

      .heading-mySkills {
        font-size: 1.6rem;
      }
    }

    .each-skill-container {
      gap: 3rem;
    }

    .each-skill {
      .each-skill-heading {
        font-size: 1rem;
      }

      .each-skill-icon {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  @media screen and (min-width: 760px) {
    .section-center {
      article {
        p {
          font-size: 1rem;
        }
      }

      .heading-mySkills {
        font-size: 1.8rem;
      }
    }

    .each-skill {
      .each-skill-heading {
        font-size: 1.2rem;
      }

      .each-skill-icon {
        width: 3rem;
        height: 3rem;
      }
    }

    .icon-container {
      .icon-name {
        font-size: 0.75rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .each-skill {
      .each-skill-icon {
        width: 4.5rem;
        height: 4.5rem;
      }
    }

    .icon-container {
      width: 5rem;
      height: 5rem;
    }
    .each-skill-icon {
      position: absolute;
      width: 4rem;
      height: 4rem;
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
