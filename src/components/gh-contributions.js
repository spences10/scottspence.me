import { ResponsiveCalendar } from '@nivo/calendar';
import { subWeeks } from 'date-fns';
import React from 'react';
import { between, down, up } from 'styled-breakpoints';
import styled from 'styled-components';
import { useGitHubContributions } from '../hooks/use-github-contributions';
import { contributions } from '../services/data-massage';

const Wrapper = styled.div`
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colours.grey[100]};
  border-radius: 5px;
  margin-top: 60px;
  height: 320px;
  ${down('lg')} {
    width: 100%;
    right: 0%;
  }
  ${up('md')} {
    position: relative;
    width: 150%;
    max-width: 850px;
    right: 22%;
  }
  ${down('md')} {
    position: inherit;
    width: 100%;
    overflow-x: auto;
  }
  ${between('lg', 'md')} {
    position: initial;
  }
`;

const ContributionsWrapper = styled.div`
  height: 400px;
  margin: -60px auto;
  ${down('md')} {
    position: relative;
    max-width: 800px;
    width: 200%;
    right: 94%;
  }
  ${between('md', 'lg')} {
    position: initial;
  }
  ${between('sm', 'md')} {
    position: initial;
    right: 100%;
  }
`;

export const GitHubContributions = () => {
  const { weeks } = useGitHubContributions();
  return (
    <Wrapper>
      <ContributionsWrapper>
        <ResponsiveCalendar
          data={contributions(weeks)}
          from={subWeeks(new Date(Date.now()), 49).toISOString()}
          to={new Date(Date.now()).toISOString()}
          emptyColor="#eeeeee"
          colors={[
            '#a1cfff',
            '#468df3',
            '#a053f0',
            '#9629f0',
            '#8428d8',
          ]}
          margin={{ top: 80, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          // yearLegendPosition="after"
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      </ContributionsWrapper>
    </Wrapper>
  );
};
