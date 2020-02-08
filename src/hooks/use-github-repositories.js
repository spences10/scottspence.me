import { graphql, useStaticQuery } from 'gatsby';

export const useGitHubRepositories = () => {
  const { github } = useStaticQuery(
    graphql`
      query GITHUB_TOP_LANGUAGES_QUERY {
        github {
          viewer {
            repositories(
              last: 50
              isFork: false
              orderBy: { field: UPDATED_AT, direction: ASC }
            ) {
              nodes {
                name
                description
                url
                updatedAt
                languages(first: 5) {
                  nodes {
                    color
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return github.viewer;
};
