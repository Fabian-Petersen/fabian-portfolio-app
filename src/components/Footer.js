import Wrapper from "../styleWrappers/styleFooter";
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

export default Footer;
