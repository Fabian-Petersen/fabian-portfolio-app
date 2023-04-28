import Wrapper from "../styleWrappers/styleLogo";

const Logo = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          Fabian<span className="point">.</span>
        </div>

        {/* <span className="letter-p">P</span> */}
      </div>
    </Wrapper>
  );
};

export default Logo;
