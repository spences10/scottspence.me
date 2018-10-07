const siteMetadata = {
  siteUrl: 'https://scottspence.me',
  title: 'scottspence.me',
  titleTemplate: '%s | scottspence.me',
  description:
    'Scott Spence, Father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him',
  twitterUsername: '@ScottDevTweets',
  facebookAppID: '',
  pages: ['about', 'portfolio', 'now', 'uses'],
  contact: [
    { name: 'GitHub', link: 'https://github.com/spences10' },
    { name: 'Medium', link: 'https://medium.com/@spences10' },
    { name: 'Dev.to', link: 'https://dev.to/spences10' },
    { name: 'Twitter', link: 'https://twitter.com/ScottDevTweets' },
    { name: 'Email', link: 'mailto:spences10apps@gmail.com' }
  ],
  firstName: 'Scott',
  lastName: 'Spence',
  faviconPng: './src/images/favicon.png',
  backgroundColour: '#663399', // this is for favicon and manifest
  themeColour: '#755f9f', // this is for favicon and manifest
  nameContent: 'Scott Spence - portfolio',
  developerName: 'Scott Spence',
  developerUrl: 'https.scottspence.me',
  descriptionContent: 'Scott Spence - web developer',
  keywordsContent:
    'web developer, javascript, react, portfolio, information',
  imageLink: 'https://scottspence.me/icons/icon-512x512.png',
  siteLanguage: 'en-GB'
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: '/',
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: 'minimal-ui',
        icon: siteMetadata.faviconPng // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/md`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-autolink-headers']
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GRAPHCMSDATA',
        fieldName: 'graphcmsdata',
        // Url to query from
        url:
          'https://api-euwest.graphcms.com/v1/cjmgt766w107g01av7fdvb5zn/master'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // add to netlify Build environment variables
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        anonymize: false,
        head: true
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: siteMetadata.faviconPng,
        // WebApp Manifest Configuration
        appName: siteMetadata.title,
        appDescription: siteMetadata.descriptionContent,
        developerName: siteMetadata.developerName,
        developerURL: siteMetadata.developerUrl,
        dir: 'auto',
        lang: siteMetadata.siteLanguage,
        background: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap'
  ]
}
