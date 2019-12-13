import { ResponsiveCalendar } from 'nivo';
import React from 'react';
import styled from 'styled-components';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { contributions } from '../services/data-massage';

const ContributionsWrapper = styled.div`
  position: relative;
  width: 150%;
  right: 27%;
  height: 20vh;
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
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'row',
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: 'right-to-left',
          },
        ]}
      />
    </ContributionsWrapper>
  );
};
