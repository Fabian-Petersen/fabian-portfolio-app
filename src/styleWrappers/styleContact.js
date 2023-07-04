import styled from "styled-components";

const Wrapper = styled.section`
  .contact {
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    /* position: relative; */
  }

  .section-center {
    /* border: var(--border-primary); */
    height: 100%;
  }

  .contact-container {
    margin-top: 10rem;
    display: grid;
    height: 100%;
    grid-template-columns: 40% 60%;
    /* border: 1px solid yellow; */
    max-height: 40rem;
  }

  .contact-detail-cards {
    width: 20rem;
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }

  .contact-detail-card {
    height: 30%;
    font-size: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    align-items: flex-start;
    padding: 10px 15px;
    gap: 1rem;
  }

  .btn-contact {
    width: 100%;
    height: 3rem;
    color: var(--clr-font);
  }

  .btn-contact:hover {
    outline: 2px solid var(--clr-font);
  }

  input {
    height: 2.5rem;
    background-color: transparent;
    border: none;
    color: var(--clr-font);
    font-size: 0.9rem;
    margin-bottom: 20px;
    width: 50%;
    gap: 1rem;
  }

  textarea {
    padding: 5px;
    outline: none;
    margin-bottom: 20px;
    font-size: 0.9rem;
    border: none;
  }

  input:focus,
  textarea:focus {
    outline: #ffd700;
    border: 2px solid var(--clr-input-focus);
  }

  input:valid:focus,
  textarea:valid:focus {
    border: none;
    border-bottom: 2px solid #00ff6a;
    color: var(--clr-font);
  }

  //!  ==================================== Start of Media Queries ================================= //

  @media screen and (min-width: 676px) {
    .contact-container {
      margin-top: 10rem;
      max-height: 70rem;
      grid-column-gap: 5rem;
    }

    form {
      /* border: 1px solid red; */
    }

    .contact-detail-cards {
      max-width: 20rem;
      display: flex;
      gap: 1.5rem;
      flex-direction: column;
      margin-left: auto;
    }

    .contact-detail-card {
      padding: 1rem;
      padding-right: 0 8rem;
      display: flex;
      flex-direction: column;
      border: 1px solid green;
      height: 30%;
      font-size: 1.5rem;
      gap: 0.5rem;
      border: var(--clr-contact-cards-border);
      border-radius: 5px;
    }

    .contact-detail-heading {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    .contact-detail-heading h3 {
      margin-bottom: 0;
    }

    .contact-detail-card h3 {
      font-weight: 500;
      font-size: 2rem;
    }

    .contact-detail-card p {
      margin-bottom: 0;
      font-size: 1.5rem;
    }

    input {
      height: 4rem;
      width: 50%;
      font-size: 1.8rem;
      background-color: transparent;
      border: none;
      border-radius: 0px;
      transition: all 0.7s ease-in;
      border-bottom: 1px solid var(--clr-input-bottom);
    }

    textarea {
      height: 10rem;
      border-bottom: 1px solid var(--clr-input-bottom);
      background-color: transparent;
      color: var(--clr-font);
      font-size: 1.8rem;
      width: 100%;
    }

    input::placeholder,
    textarea::placeholder {
      color: var(--clr-font);
      transition: transform 0.3s ease;
    }

    input:focus,
    textarea:focus {
      outline: none;
      border: none;
      border-bottom: 1px solid var(--clr-input-bottom);
    }

    input:focus::placeholder,
    textarea:focus::placeholder {
      transform: translateY(-15px);
      font-size: 1.3rem;
      padding: 0;
      overflow: visible;
    }

    textarea:focus::placeholder {
      transform: translateY(-10px);
    }

    .btn-contact {
      height: 3.5rem;
    }
  }
`;

export default Wrapper;
