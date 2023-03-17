import Wrapper from "../styleWrappers/styleBurgerMenu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGlobalContext } from "../ContextAPI";

const BurgerMenuButton = () => {
  const { openSidebar, setOpenSidebar } = useGlobalContext();
  return (
    <Wrapper>
      <div>
        <button
          className={
            openSidebar ? "show-sidebar hide-nav" : "nav-btn hide-sidebar"
          }
          id="nav-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </Wrapper>
  );
};

export default BurgerMenuButton;
