import Wrapper from "../styleWrappers/styleContact";
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

export default Contact;
