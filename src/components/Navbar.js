import Wrapper from "../styleWrappers/styleNavbar";
import { ThemeSelector, BurgerMenuButton, Logo } from "../components/index.js";
import { useGlobalContext } from "../ContextAPI";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();

  return (
    <Wrapper>
      <div className="section-center nav nav-fixed nav-fixed-active">
        <Link to="/">
          <Logo />
        </Link>
        <div className="nav-btns">
          <ThemeSelector theme={theme} setTheme={setTheme} />
          <BurgerMenuButton />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
