import { ResponsiveCalendar } from '@nivo/calendar';
import { startOfYear, subYears } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { useGitHubContributions } from '../hooks/useGitHubContributions';
import { contributions } from '../services/data-massage';
import { media } from '../theme/sizes';

const Wrapper = styled.div`
  overflow: hidden;
  ${media.desktop`
    position: relative;
    width: 150%;
    max-width: 850px;
    right: 22%;
  `}
`;

const ContributionsWrapper = styled.div`
  height: 40vh;
  position: relative;
  max-width: 800px;
  width: 150%;
  right: 50%;
  ${media.desktop`
    position: null;
    max-width: null;
    width: null;
    right: null;
  `}
`;

export const GitHubContributions = () => {
  const { weeks } = useGitHubContributions();
  return (
    <Wrapper>
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
          yearLegendPosition="after"
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      </ContributionsWrapper>
    </Wrapper>
  );
};
