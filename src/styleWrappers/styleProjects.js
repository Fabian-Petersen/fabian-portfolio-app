import styled from "styled-components";

const Wrapper = styled.section`
  .projects-text {
    font-size: var(--fs-text);
    text-align: center;
  }

  .project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    background: var(--clr-primary-5);
    border-radius: var(--radius);
    margin-bottom: 2rem;
    width: 65%;
    height: 20rem;
    align-items: center;
    background-size: cover;
    transition: all 200ms ease;
    overflow: hidden;
  }

  .project-title {
    font-size: var(--fs-heading-h3);
    color: var(--clr-font);
    text-align: center;
  }

  .project-title:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
    color: var(--clr-primary);
  }

  .project-img {
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    -o-object-fit: cover;
    object-fit: cover;
  }

  .project-img:hover {
    opacity: 0.8;
  }

  .card-body {
    position: absolute;
    display: grid;
    place-content: center;
    left: 0;
    right: 0;
    height: 100%;
    bottom: -100%;
    border-radius: var(--radius);
    transition: var(--transition);
    background-color: var(--clr-blue);
    opacity: 1;
  }

  .project-card:hover .card-body {
    transform: translateY(0);
    opacity: 0.8;
    bottom: 0;
    height: 101%;
    width: 101%;
  }

  .project-card p {
    text-transform: capitalize;
    font-size: var(--fs-text);
    color: var(--clr-white);
    text-align: center;
  }

  .project:hover .project-info {
    /* opacity: 0.1; */
  }

  @media screen and (min-width: 676px) {
    .project-card {
      width: 100%;
      height: 30rem;
    }

    .projects-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .projects-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Wrapper;
