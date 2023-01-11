import React from "react";
import { useGlobalContext } from "../ContextAPI";
import styled from "styled-components";

const SinglePage = () => {
  const { projects } = useGlobalContext();
  return (
    <Wrapper>
      <main>
        {projects.map((project) => {
          const { name, singlePage } = project;
          return (
            <div>
              <h1>{name}</h1>
              <p>{singlePage.description}</p>
            </div>
          );
        })}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default SinglePage;
