import { startOfYear, subYears } from 'date-fns';
import { ResponsiveCalendar } from 'nivo';
import React from 'react';
import styled from 'styled-components';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { contributions } from '../services/data-massage';

const ContributionsWrapper = styled.div`
  position: relative;
  width: 150%;
  right: 24%;
  height: 40vh;
  margin-top: 60px;
`;

export const GitHubContributions = ({ data }) => {
  const { weeks } = useGitHubContributions();
  return (
    <ContributionsWrapper>
      <ResponsiveCalendar
        data={contributions(weeks)}
        from={startOfYear(subYears(new Date(Date.now()), 1))}
        to={new Date(Date.now()).toISOString()}
        emptyColor="#eeeeee"
        // colors={['#70facb', '#29c195', '#008a62', '#3c60a4']}
        colors={[
          '#a1cfff',
          '#468df3',
          '#a053f0',
          '#9629f0',
          '#8428d8',
        ]}
        margin={{ top: 80, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
      />
    </ContributionsWrapper>
  );
};
