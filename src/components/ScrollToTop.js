import Icons from "../assets/images/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
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
          console.log(visible);
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
      {visible && (
        <div>
          <FontAwesomeIcon
            className="scrollToTop"
            onClick={handleClick}
            icon={faChevronCircleUp}
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .scrollToTop {
    font-size: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    text-align: center;
    background-color: var(--clr-primary-2);
  }

  .scrollToTop:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    .scrollToTop {
      top: 90%;
      position: fixed;
      right: 1.5%;
      z-index: 1000;
    }
  }
`;

export default ScrollToTop;
