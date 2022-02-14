import Data from "../data/data.json";
import styled from "styled-components";

const ProjectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  color: var(--h1-hero);
  width: 100%;
  text-align: center;

  h2 {
    font-size: var(--font-size);
    color: var(--orange-color);
  }

  .projectNumber {
    color: var(--orange-color);
    font-size: var(--font-size);
  }

  .Card {
    width: 100%;
    margin-bottom: 100px;
    margin-top: 100px;
  }
`;

const Projects = () => {
  return (
    <>
      <ProjectContainer>
        {Data.map(({ id, title, year, description, image }) => (
          <div className="Card" key={id}>
            <div className="projText">
              <div className="projectTitle">
                <h2>{title}</h2>
              </div>
              <h3>{year}</h3>
              <p>{description}</p>
              <div className="projectImage">
                <img className="imagesmac" src={image} alt="projectimages" />
              </div>
            </div>
          </div>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
