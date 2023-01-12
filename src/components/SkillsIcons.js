import React from "react";
import styled from "styled-components";

const SkillsIcons = ({ singlePage }) => {
  return (
    <Wrapper>
      <div className='container'>
        <ul className='skills-list'>
          {singlePage.skills.map((item, index) => {
            return (
              <li key={index}>
                <img src={item} alt='' />
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    margin-bottom: 3rem;
  }

  .skills-list {
    display: flex;
    height: 5rem;
    gap: 2rem;
    justify-content: center;
    margin-bottom: 3rem;
  }

  .skills-list li {
    ${"" /* border: var(--border-red); */}
    width: 5rem;
    transition: var(--transition);
  }

  .skills-list li:hover {
    transform: scale(1.1);
  }
`;

export default SkillsIcons;
