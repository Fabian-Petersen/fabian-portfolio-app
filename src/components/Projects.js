import Wrapper from "../styleWrappers/styleProjects";
import { FilterButtons, PulseIcon } from "../components";
import { useActiveMenu } from "react-active-menu";
import { useGlobalContext } from "../ContextAPI";

const Projects = () => {
  const { registerSection } = useActiveMenu();
  const { projectMenu } = useGlobalContext();

  return (
    <Wrapper>
      <section
        className="section projects"
        id="projects"
        ref={registerSection("projects")}
      >
        <div className="section-title">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <p className="projects-text">My latest completed projects</p>
        <FilterButtons className="filterButtons" />
        <div className="section-center projects-center">
          {projectMenu.map((item) => {
            const { id, name, language, image, code, url } = item;
            return (
              <div className="project-card" key={id}>
                <img src={image} alt={name} className="project-img" />
                <div className="card-body">
                  <a href={`/projects/${id}`}>
                    <h4 className="project-title">{name}</h4>
                  </a>
                  <p>Designed with {language}</p>
                  <PulseIcon code={code} url={url} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default Projects;
