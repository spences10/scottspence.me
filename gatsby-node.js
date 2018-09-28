const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const mdTemplate = path.resolve('src/templates/mdTemplate.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: mdTemplate,
        context: {} // additional data can be passed via context
      })
    })
  })
}
