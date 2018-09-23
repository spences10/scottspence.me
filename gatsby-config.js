module.exports = {
  siteMetadata: {
    title: 'scottspence.me',
    pages: ['about', 'portfolio', 'now', 'uses', 'contact'],
    contact: [
      { name: 'GitHub', link: 'https://github.com/spences10' },
      { name: 'Medium', link: 'https://medium.com/@spences10' },
      { name: 'Dev.to', link: 'https://dev.to/spences10' },
      { name: 'Twitter', link: 'https://twitter.com/ScottDevTweets' },
      { name: 'Email', link: 'mailto:spences10apps@gmail.com' }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
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
    'gatsby-transformer-remark'
  ]
}
