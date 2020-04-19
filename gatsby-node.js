const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const mdTemplate = path.resolve('src/templates/md-template.js')

  return graphql(`
    {
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const pages = result.data.allMdx.nodes

    pages.forEach(page => {
      createPage({
        path: page.fields.slug,
        component: mdTemplate,
        context: {
          slug: page.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
