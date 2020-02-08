import React from 'react';
import styled from 'styled-components';
import { useGraphCMSData } from '../hooks/use-graphcms-data';
import { ProjectCard } from './project-card';

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Projects = () => {
  const { assets } = useGraphCMSData();
  return (
    <ProjectWrapper>
      {assets.map(project => {
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
