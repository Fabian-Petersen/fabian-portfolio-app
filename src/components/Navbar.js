import Wrapper from "../styleWrappers/styleNavbar";
import {
  ThemeSelector,
  BurgerMenuButton,
  Logo,
  IconPageLinks,
} from "../components/index.js";

import { useGlobalContext } from "../ContextAPI";

const Navbar = () => {
  const { theme, setTheme } = useGlobalContext();

  // console.log(theme);

  return (
    <Wrapper>
      <nav className="nav nav-fixed nav-fixed-active" id="nav">
        <div className="nav-center">
          <a href="/#home">
            <Logo />
          </a>
          <div className="nav-btns">
            <ThemeSelector theme={theme} setTheme={setTheme} />
            <BurgerMenuButton />
          </div>
          <IconPageLinks />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
