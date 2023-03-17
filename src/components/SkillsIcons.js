import Wrapper from "../styleWrappers/styleSkillsIcon";

const SkillsIcons = ({ singlePage }) => {
  return (
    <Wrapper>
      <div className="container">
        <ul className="skills-list">
          {singlePage.skills.map((item, index) => {
            return (
              <li key={index}>
                <img src={item} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default SkillsIcons;
