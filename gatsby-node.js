const path = require("path")
const productTemplate = path.resolve(__dirname, "./src/templates/product.js")
const useCaseTemplate = path.resolve(__dirname, "./src/templates/use_case.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    {
      allPrismicProduct {
        edges {
          node {
            id
            uid
            data {
              product_title
            }
          }
        }
      }
    }
  `)

  const use_cases = await graphql(`
  {
  allPrismicUseCase {
    edges {
      node {
        uid
        data {
          preview_title
        }
      }
    }
  }
}
  `)

  // Create pages for each Page in Prismic using the selected template.
  use_cases.data.allPrismicUseCase.edges.forEach(node => {
    createPage({
      path: `/${node.node.uid}`,
      component: useCaseTemplate,
      context: {
        uid: node.node.uid,
      },
    })
  })

    // Create pages for each Page in Prismic using the selected template.
    pages.data.allPrismicProduct.edges.forEach(node => {
      createPage({
        path: `/${node.node.uid}`,
        component: productTemplate,
        context: {
          uid: node.node.uid,
        },
      })
    })



}
