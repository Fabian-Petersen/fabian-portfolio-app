import React from "react";
import { useGlobalContext } from "../ContextAPI";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import SkillsIcons from "./SkillsIcons";

const SinglePage = () => {
  const { projectMenu } = useGlobalContext();
  const { projectId } = useParams();
  const project = projectMenu.find((item) => item.id === parseInt(projectId));
  const { name, singlePage } = project;
  return (
    <Wrapper>
      <main>
        <section className='section'>
          <div className='section-center'>
            <div className='section-title'>
              <h2>{name}</h2>
              <div className='underline'></div>
              <p className='desc'>{singlePage.description}</p>
              <h3 className='skills-title'>Skills Used</h3>
              <SkillsIcons name={name} singlePage={singlePage} />
              <Link to='/projects'>
                <button className='btn hero-btn-2'>Back</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .desc {
    margin-bottom: 3rem;
  }

  .hero-btn-2 {
    padding: 1rem 2.5rem;
  }
`;

export default SinglePage;
