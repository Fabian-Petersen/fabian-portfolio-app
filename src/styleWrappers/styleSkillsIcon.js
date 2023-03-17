import styled from "styled-components";

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
export default Wrapper;
