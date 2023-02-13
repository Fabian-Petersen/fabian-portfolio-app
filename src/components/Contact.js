import React from "react";
import styled from "styled-components";
//import { useObserverContext } from "../ObserverAPI";

const Contact = () => {
  //const { ref3 } = useObserverContext();
  return (
    <Wrapper>
      <section className="contact section" id="contact">
        <div className="section-title">
          <h2>Lets get in touch</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center contact-center">
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/f/xgebwpge"
            method="POST"
          >
            <fieldset id="fs-frm-inputs">
              {/* <h2 className="contact-form-title">Contact Me</h2> */}
              <label htmlFor="full-name">Full Name</label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="First Name"
                required
              />
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="fabian@webmail.com"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                rows="8"
                name="message"
                id="message"
                placeholder="Enter your message"
                required
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <button
              id="contact-btn"
              type="submit"
              value="Submit"
              className="btn btn-1 btn-contact btn-lg"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact {
    min-height: 75vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    margin-bottom: 5rem;
    align-items: center;
    /* -webkit-backdrop-filter: blur(10px); */
    border: var(--border);
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px 15px;
    /* border: 1px solid white; */
    /* backdrop-filter: blur(10px); */
  }

  fieldset {
    flex-direction: column;
    display: flex;
    width: 100%;
    border: none;
    overflow: none;
    outline: none;
    margin-bottom: 0.5rem;
  }

  button {
    max-width: 40rem;
    width: 100%;
  }

  label,
  input {
    border-radius: 5px;
  }

  label {
    color: var(--clr-white);
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    height: 2.5rem;
    background-color: hsl(0, 0%, 100%);
    padding: 0 5px;
    border: none;
    color: var(--clr-black);
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  textarea {
    padding: 5px;
    border-radius: 5px;
    outline: none;
    margin-bottom: 20px;
    font-size: 0.9rem;
    border: none;
  }

  input:focus,
  textarea:focus {
    outline: #ffd700;
    border: 2px solid #ffd700;
  }

  input:valid:focus,
  textarea:valid:focus {
    border: 2px solid #00ff6a;
  }

  .contact-form-invalid:required:invalid {
    border: 1.8px solid var(--clr-red);
    color: black;
    background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg")
      no-repeat 95% 50% rgba(255, 255, 255, 0.75);
    background-size: 2rem;
  }

  .contact-form-valid:required:valid {
    background: url("https://assets.digitalocean.com/labs/icons/check.svg")
      no-repeat 95% 50% hsl(120, 73%, 90%);
    background-size: 2rem;
  }

  .contact-form-textarea-valid:required:valid {
    background: url("https://assets.digitalocean.com/labs/icons/check.svg")
      no-repeat 95% 5% hsl(120, 73%, 90%);
    background-size: 2rem;
  }

  .contact-form-textarea-invalid:required:invalid {
    background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg")
      no-repeat 95% 5% rgba(255, 255, 255, 0.75);
    background-size: 2rem;
  }

  @media screen and (min-width: 676px) {
    form {
      padding: 10px 30px;
      /* margin: 0 auto; */
    }

    input {
      padding: 0 10px;
    }

    textarea {
      padding: 10px;
    }
  }
`;

export default Contact;
