import { ResponsivePie } from 'nivo';
import React from 'react';
import styled from 'styled-components';
import { useGitHubRepositories } from '../hooks/useGitHubRepositories';
import { topLanguages } from '../services/data-massage';

const LanguageWrapper = styled.div`
  width: 100%;
  height: 40vh;
  max-height: 700px;
  max-width: 700px;
  margin-top: 60px;
`;

export const TopLanguages = ({ data }) => {
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
      />
    </LanguageWrapper>
  );
};

// query GitHubContributions {
//   github {
//     viewer {
//       contributionsCollection {
//         contributionCalendar {
//           totalContributions
//           weeks {
//             contributionDays {
//               color
//               contributionCount
//               date
//               weekday
//             }
//           }
//         }
//       }
//     }
//   }
// }
