import Wrapper from "../styleWrappers/styleSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import links from "../pageLinks";

const SideBar = ({ openSidebar, setOpenSidebar }) => {
  const handleClick = () => {
    setOpenSidebar(false);
  };

  return (
    <Wrapper>
      <div>
        <aside
          className={openSidebar ? "show-sidebar" : "hide-sidebar"}
          id="sidebar"
        >
          <div>
            <button className="close-btn" onClick={handleClick}>
              <FontAwesomeIcon icon={faClose} id="close-btn" />
            </button>
            <ul className="sidebar-links">
              {links.map((link) => {
                const { id, href, section } = link;
                return (
                  <li key={id}>
                    <a href={href} onClick={handleClick}>
                      {section}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </Wrapper>
  );
};

export default SideBar;
