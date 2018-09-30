const config = require('./data/siteConfig')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://scottspence.me',
    title: 'scottspence.me',
    pages: ['about', 'portfolio', 'now', 'uses', 'contact'],
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
    themeColour: '#755f9f' // this is for favicon and manifest
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: () => {
          this.name = this.siteMetadata.title
          return this
        },
        short_name: () => {
          this.short_name = this.siteMetadata.title
          return this
        },
        start_url: '/',
        background_color: () => {
          this.background_color = this.siteMetadata.backgroundColour
          return this
        },
        theme_color: () => {
          this.theme_color = this.siteMetadata.themeColour
          return this
        },
        display: 'minimal-ui',
        icon: () => {
          this.icon = this.siteMetadata.faviconPng
          return this
        } // This path is relative to the root of the site.
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
        trackingId: process.env.GATSBY_GA_TRACKING_ID, // add to netlify Build environment variables
        anonymize: false
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: config.faviconPng,
        // WebApp Manifest Configuration
        appName: config.siteTitle,
        appDescription: config.descriptionContent,
        developerName: config.developerName,
        developerURL: config.developerUrl,
        dir: 'auto',
        lang: config.siteLanguage,
        background: config.backgroundColour,
        theme_color: config.themeColour,
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
