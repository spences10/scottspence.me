import { ResponsiveCalendar } from 'nivo';
import React from 'react';
import styled from 'styled-components';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { contributions } from '../services/data-massage';

const ContributionsWrapper = styled.div`
  width: 100%;
  height: 40vh;
  max-height: 700px;
  max-width: 700px;
  margin-top: 60px;
`;

export const GitHubContributions = ({ data }) => {
  const { weeks } = useGitHubContributions();
  return (
    <ContributionsWrapper>
      <ResponsiveCalendar
        data={contributions(weeks)}
        from="2019-01-01"
        to="2019-12-12"
      />
    </ContributionsWrapper>
  );
};
