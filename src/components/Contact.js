import Wrapper from "../styleWrappers/styleContact";
import { motion } from "framer-motion";
import headingVariants from "../animations/pageHeadingAnimate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [parentContainerHeading, childContainerHeading] = headingVariants;
  return (
    <Wrapper>
      <section className="section-center section">
        <motion.div
          className="section-title"
          variants={parentContainerHeading}
          initial="initialState"
          animate="animateState"
        >
          <motion.h2 variants={childContainerHeading}>
            Lets get in touch
          </motion.h2>
          <motion.div
            className="underline"
            variants={childContainerHeading}
          ></motion.div>
        </motion.div>
        <div className="contact-container">
          <div className="contact-detail-cards">
            <div className="contact-detail-card">
              <div className="contact-detail-heading">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <h3>Email</h3>
              </div>
              <p>fpetersen2@gmail.com</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-heading">
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>

                <h3>Mobile</h3>
              </div>
              <p>071 386 0827</p>
            </div>
            <div className="contact-detail-card">
              <div className="contact-detail-heading">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <h3>Location</h3>
              </div>
              <p>Cape Town</p>
            </div>
          </div>
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/f/xgebwpge"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" required />
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="Email"
              required
            />
            <textarea
              rows="5"
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
            <button type="submit" className="btn btn-contact">
              SUBMIT
            </button>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
