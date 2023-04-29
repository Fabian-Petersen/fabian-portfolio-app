import Wrapper from "../styleWrappers/styleLogo";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/home">
        <div className="container">
          <div className="logo">
            Fabian<span className="point">.</span>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Logo;
