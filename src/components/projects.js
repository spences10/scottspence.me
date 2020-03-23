import React from 'react';
import { up } from 'styled-breakpoints';
import styled from 'styled-components';
import { useGraphCMSData } from '../hooks/use-graphcms-data';
import { ProjectCard } from './project-card';

const ProjectWrapper = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing[5]};
  ${up('sm')} {
    /* background-color: rebeccapurple; */
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
  ${up('md')} {
    /* background-color: mediumseagreen; */
  }
  ${up('lg')} {
    /* background-color: burlywood; */
    grid-template-columns: repeat(2, 1fr);
    margin: 0 -20%;
  }
  ${up('xl')} {
    /* background-color: blueviolet; */
    grid-template-columns: repeat(3, 1fr);
    margin: 0 -50%;
  }
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
