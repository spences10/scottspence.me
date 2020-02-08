import { ResponsivePie } from '@nivo/pie';
import React from 'react';
import styled from 'styled-components';
import { useGitHubRepositories } from '../hooks/use-github-repositories';
import { topLanguages } from '../services/data-massage';

const LanguageWrapper = styled.div`
  width: 100%;
  height: 40vh;
  max-height: 700px;
  max-width: 700px;
  margin-top: 60px;
`;

export const TopLanguages = () => {
  const { repositories } = useGitHubRepositories();
  return (
    <LanguageWrapper>
      <ResponsivePie
        data={topLanguages(repositories)}
        margin={{
          top: 40,
          right: 80,
          bottom: 80,
          left: 80,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={['#f7df1e', '#299bd7', '#f16529', '#007acc']}
      />
    </LanguageWrapper>
  );
};
