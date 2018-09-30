const config = require('./siteConfig')

// use https://www.heymeta.com/ to generate your tags
export const siteMeta = [
  // Google / Search Engine Tags
  {
    name: 'description',
    content: config.descriptionContent
  },
  {
    name: 'keywords',
    content: config.keywordsContent
  },
  {
    name: 'image',
    content: config.imageLink
  },
  // facebook
  { name: 'og:url', content: config.siteUrl },
  { name: 'og:type', content: 'website' },
  { name: 'og:title', content: config.nameContent },
  {
    name: 'og:description',
    content: config.descriptionContent
  },
  {
    name: 'og:image',
    content: config.imageLink
  },
  // twitter
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: config.nameContent
  },
  {
    name: 'twitter:description',
    content: config.descriptionContent
  },
  {
    name: 'twitter:image',
    content: config.imageLink
  }
]
