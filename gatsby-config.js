module.exports = {
  siteMetadata: {
    title: 'Scott Spence - portfolio site',
    pages: ['about', 'portfolio', 'now', 'uses', 'contact']
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87264973-2',
        anonymize: true
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages/md`
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'scottspence.me',
        short_name: 'scottspence.me',
        start_url: '/',
        background_color: '#f7f0eb', // #755f9f
        theme_color: '#755f9f',
        display: 'minimal-ui',
        icon: 'src/img/favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
