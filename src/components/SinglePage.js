import React from "react";
import { useGlobalContext } from "../ContextAPI";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

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
            return (
            <div className='section-title'>
              <h2>{name}</h2>
              <div className='underline'></div>
              <p>{singlePage.description}</p>
              <Link to='/projects'>
                <button className='btn hero-btn-2'>Back</button>
              </Link>
            </div>
            )
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default SinglePage;
