import React from 'react';
import styled from 'styled-components';
import { useGraphCMSData } from '../hooks/use-graphcms-data';
import { ProjectCard } from './project-card';

const ProjectWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

export const Projects = () => {
  const { assets } = useGraphCMSData();
  return (
    <ProjectWrapper>
      {assets.map((project, index) => {
        const {
          projectName,
          projectDescription,
          githubRepo,
          demoLink,
        } = project.projectImageProject[0];
        const { url: image, id } = project;
        return (
          // <Dump prop={project.projectImageProject[0].projectName} />
          <ProjectCard
            id={index}
            key={id}
            name={projectName}
            desc={projectDescription}
            github={githubRepo}
            demo={demoLink}
            image={image}
          />
        );
      })}
    </ProjectWrapper>
  );
};
