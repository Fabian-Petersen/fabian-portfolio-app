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
              <h1>{name}</h1>
              <div className="underline"></div>
              <div className="content-container">
                <h3>Summary</h3>
                <p className="desc">{singlePage.description}</p>
                <h3 className="skills-title">Technologies Used</h3>
                <SkillsIcons name={name} singlePage={singlePage} />
                <hr />
                <h3>Learning Experience</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum quisquam aut nostrum nemo animi illo similique aperiam
                  repellat cupiditate cum maxime rem molestiae, accusantium
                  fugiat autem laboriosam voluptatibus sequi eos.
                </p>
              </div>
              <hr />
              <Link to="/projects">
                <button className="btn btn-singlePage">Back</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Wrapper>
  );
};

export default SinglePage;
