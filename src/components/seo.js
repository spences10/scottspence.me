import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Twitter from './Twitter'
import Facebook from './Facebook'

import { Dump } from '../util/helpers'

const SEO = ({ data }) => {
  const {
    title,
    titleTemplate,
    description,
    image,
    siteUrl,
    article,
    twitterUsername,
    facebookAppID
  } = data.site.siteMetadata
  return (
    <>
      <Dump data={data} />
      <Helmet title={title} titleTemplate={titleTemplate}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
      </Helmet>
      <Facebook
        pageUrl={siteUrl}
        type={article ? 'article' : null}
        title={title}
        description={description}
        image={image}
        appID={facebookAppID}
      />
      <Twitter
        username={twitterUsername}
        title={title}
        description={description}
        image={image}
      />
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query SEOData {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            siteUrl
            imageLink
            twitterUsername
            facebookAppID
          }
        }
      }
    `}
    render={data => <SEO data={data} {...props} />}
  />
)

// use https://www.heymeta.com/ to generate your tags
// export const siteMeta = [
//   // Google / Search Engine Tags
//   {
//     name: 'description',
//     content: siteMetadata.descriptionContent
//   },
//   {
//     name: 'keywords',
//     content: siteMetadata.keywordsContent
//   },
//   {
//     name: 'image',
//     content: siteMetadata.imageLink
//   },
//   // facebook
//   { name: 'og:url', content: siteMetadata.siteUrl },
//   { name: 'og:type', content: 'website' },
//   { name: 'og:title', content: siteMetadata.nameContent },
//   {
//     name: 'og:description',
//     content: siteMetadata.descriptionContent
//   },
//   {
//     name: 'og:image',
//     content: siteMetadata.imageLink
//   },
//   // twitter
//   { name: 'twitter:card', content: 'summary_large_image' },
//   {
//     name: 'twitter:title',
//     content: siteMetadata.nameContent
//   },
//   {
//     name: 'twitter:description',
//     content: siteMetadata.descriptionContent
//   },
//   {
//     name: 'twitter:image',
//     content: siteMetadata.imageLink
//   }
// ]
