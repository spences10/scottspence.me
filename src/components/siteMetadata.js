import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            imageLink
            twitterUsername
            pages
            contact {
              name
              link
            }
            siteLanguage
            lastBuildDate
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
