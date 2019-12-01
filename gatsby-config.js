const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const siteMetadata = {
  siteUrl: `https://scottspence.me`,
  title: `Portfolio Site of Scott Spence, Web Developer`,
  titleTemplate: `%s | scottspence.me`,
  description: `Scott Spence, Father, husband 👨‍👩‍👧 Full stack web developer in the making 👨‍💻 Just In Time learner 👌 Byproduct of: coffee+excess carbs+lack of sleep. He/Him`,
  twitterUsername: `@spences10`,
  facebookAppID: ``,
  pages: [`about`, `portfolio`, `now`, `uses`],
  contact: [
    { name: `GitHub`, link: `https://github.com/spences10` },
    {
      name: `YouTube`,
      link: `https://www.youtube.com/channel/UCnngLXpLSFsKkDhFoO9Ct3w?view_as=subscriber`,
    },
    { name: `Dev.to`, link: `https://dev.to/spences10` },
    { name: `Twitter`, link: `https://twitter.com/spences10` },
    {
      name: `LinkedIn`,
      link: `https://www.linkedin.com/in/spences10`,
    },
    { name: `Email`, link: `mailto:spences10apps@gmail.com` },
  ],
  firstName: `Scott`,
  lastName: `Spence`,
  backgroundColour: `#663399`, // this is for favicon and manifest
  themeColour: `#755f9f`, // this is for favicon and manifest
  nameContent: `Scott Spence - portfolio`,
  developerName: `Scott Spence`,
  developerUrl: `https://scottspence.me`,
  descriptionContent: `Scott Spence - web developer`,
  keywordsContent: `web developer, javascript, react, portfolio, information`,
  faviconPng: `./static/favicon.png`,
  imageLink: `/favicon.png`,
  siteLanguage: `en-GB`,
  siteLocale: `en_gb`,
  lastBuildDate: new Date(Date.now()).toISOString(),
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: siteMetadata.backgroundColour,
        theme_color: siteMetadata.themeColour,
        display: `minimal-ui`,
        icon: siteMetadata.faviconPng, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/copy`,
        name: `posts`,
      },
    },
    `gatsby-plugin-mdx`,
    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     extensions: [`.mdx`, `.md`],
    //     gatsbyRemarkPlugins: [
    //       `gatsby-remark-autolink-headers`,
    //       {
    //         resolve: `gatsby-remark-external-links`,
    //         options: {
    //           target: `_blank`,
    //           rel: `noopener`,
    //         },
    //       },
    //       `gatsby-remark-smartypants`,
    //       `gatsby-transformer-sharp`,
    //       `gatsby-plugin-sharp`,
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GRAPHCMSDATA`,
        fieldName: `graphcmsdata`,
        // Url to query from
        url: process.env.GATSBY_SOURCE_GRAPHQL,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        siteId: process.env.GATSBY_FATHOM_TRACKING_ID_SCOTT_SPENCE_ME,
      },
    },
  ],
};
