import React from 'react'

const SEO = props => {
  return (
    <React.Fragment>
      <p>jsx goes here</p>
    </React.Fragment>
  )
}

export default SEO

// use https://www.heymeta.com/ to generate your tags
export const siteMeta = [
  // Google / Search Engine Tags
  {
    name: 'description',
    content: siteMetadata.descriptionContent
  },
  {
    name: 'keywords',
    content: siteMetadata.keywordsContent
  },
  {
    name: 'image',
    content: siteMetadata.imageLink
  },
  // facebook
  { name: 'og:url', content: siteMetadata.siteUrl },
  { name: 'og:type', content: 'website' },
  { name: 'og:title', content: siteMetadata.nameContent },
  {
    name: 'og:description',
    content: siteMetadata.descriptionContent
  },
  {
    name: 'og:image',
    content: siteMetadata.imageLink
  },
  // twitter
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: siteMetadata.nameContent
  },
  {
    name: 'twitter:description',
    content: siteMetadata.descriptionContent
  },
  {
    name: 'twitter:image',
    content: siteMetadata.imageLink
  }
]
