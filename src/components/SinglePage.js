import { useGlobalContext } from "../ContextAPI";
import Wrapper from "../styleWrappers/styleSinglePage";
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
        <section className="section">
          <div className="section-center">
            <div className="section-title">
              <h2>{name}</h2>
              <div className="underline"></div>
              <p className="desc">{singlePage.description}</p>
              <h3 className="skills-title">Tools Used</h3>
              <SkillsIcons name={name} singlePage={singlePage} />
              <Link to="/projects">
                <button className="btn hero-btn-2">Back</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default SinglePage;
