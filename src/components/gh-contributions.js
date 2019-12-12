import { ResponsiveCalendar } from 'nivo';
import React from 'react';
import styled from 'styled-components';
import { useGitHubRepositories } from '../hooks/useGitHubRepositories';

const ContributionsWrapper = styled.div`
  width: 100%;
  height: 40vh;
  max-height: 700px;
  max-width: 700px;
  margin-top: 60px;
`;

export const GitHubContributions = ({ data }) => {
  const { repositories } = useGitHubRepositories();
  return (
    <ContributionsWrapper>
      <ResponsiveCalendar
        data={[]}
        from="2015-03-01"
        to="2016-07-12"
      />
    </ContributionsWrapper>
  );
};
