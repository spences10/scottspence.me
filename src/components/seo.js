import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Twitter from './twitter'
import Facebook from './facebook'

// import { Dump } from '../util/helpers'

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  article = false
}) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: imageLink
            twitterUsername
            facebookAppID
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          facebookAppID
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
          </Helmet>
          <Facebook
            pageUrl={seo.url}
            type={article ? 'article' : null}
            title={seo.title}
            description={seo.description}
            image={seo.image}
            appID={facebookAppID}
          />
          <Twitter
            username={twitterUsername}
            title={seo.title}
            description={seo.description}
            image={seo.image}
          />
        </>
      )
    }}
  />
)

export default SEO

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
