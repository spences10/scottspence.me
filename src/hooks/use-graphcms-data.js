import { graphql, useStaticQuery } from 'gatsby';

export const useGraphCMSData = () => {
  const { graphcmsdata } = useStaticQuery(
    graphql`
      query GRAPH_CMS_QUERY {
        graphcmsdata {
          assets(orderBy: createdAt_DESC) {
            createdAt
            updatedAt
            mimeType
            url
            size
            width
            status
            handle
            fileName
            height
            id
            projectImageProject {
              createdAt
              updatedAt
              status
              id
              projectName
              projectDescription
              githubRepo
              demoLink
            }
          }
        }
      }
    `
  );
  return graphcmsdata;
};
