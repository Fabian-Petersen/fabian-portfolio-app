import Wrapper from "../styleWrappers/styleSocialGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const SocialGroup = () => {
  return (
    <Wrapper>
      <div className="container">
        <FontAwesomeIcon icon={faShareNodes} className="share-button" />
      </div>
    </Wrapper>
  );
};
export default SocialGroup;
