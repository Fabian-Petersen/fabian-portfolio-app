import React from "react";
import { useGlobalContext } from "../ContextAPI";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SinglePage = () => {
  const { projects } = useGlobalContext();
  return (
    <Wrapper>
      <main>
        <section className='section'>
          <div className='section-center'>
            {projects.map((project) => {
              const { id, name, singlePage } = project;
              return (
                <div key={id} className='section-title'>
                  <h2>{name}</h2>
                  <div className='underline'></div>
                  <p>{singlePage.description}</p>
                  <Link to='/'>
                    <button className='btn hero-btn-2'>Home</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default SinglePage;
