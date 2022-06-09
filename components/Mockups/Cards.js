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
    font-size: 3rem;
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

  .projectDescription {
    padding-bottom: 50px;
  }

  @media (max-width: 500px) {
    .imagesmac {
      width: 80%;
      height: 80%;
    }
  }
`;

const Projects = () => {
  return (
    <>
      <ProjectContainer>
        {Data.map(({ id, title, year, description, image, link }) => (
          <div className="Card" key={id}>
            <div className="projText">
              <div className="projectTitle">
                <h2>{title}</h2>
              </div>
              <h3>{year}</h3>
              <p className="projectDescription">{description}</p>
              <a href={link} className="projectImage">
                <img className="imagesmac" src={image} alt="projectimages" />
              </a>
            </div>
          </div>
        ))}
      </ProjectContainer>
    </>
  );
};

export default Projects;
