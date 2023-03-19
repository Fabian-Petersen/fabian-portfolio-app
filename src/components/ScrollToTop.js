import Icons from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Wrapper from "../styleWrappers/styleScrollToTop";
import { useGlobalContext } from "../ContextAPI";
import { useEffect } from "react";

const { faChevronCircleUp } = Icons;

const ScrollToTop = () => {
  const { visible, setVisible } = useGlobalContext();
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 100) {
          setVisible(true);
          // console.log(visible);
        } else {
          setVisible(false);
        }
      },
      []
    );
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  return (
    <Wrapper>
      <div className={visible ? "scrollToTop" : "hide"}>
        <FontAwesomeIcon
          className="icon"
          onClick={handleClick}
          icon={faChevronCircleUp}
        />
      </div>
    </Wrapper>
  );
};

export default ScrollToTop;
