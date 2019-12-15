import { graphql, useStaticQuery } from 'gatsby';

export const useGitHubContributions = () => {
  const { github } = useStaticQuery(
    graphql`
      query GITHUB_CONTRIBUTIONS_QUERY {
        github {
          viewer {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                    weekday
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return github.viewer.contributionsCollection.contributionCalendar;
};
