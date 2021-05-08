/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,

    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: "power-house",
        schemas: {
          // all the schemas here
          test: require("./src/schemas/test.json"),
          process: require("./src/schemas/process.json"),
          Contact: require("./src/schemas/Contact.json"),
          faq: require("./src/schemas/faq.json"),
          product_page: require("./src/schemas/product_page.json"),
          product: require("./src/schemas/product.json"),
          homepage: require("./src/schemas/Homepage.json"),
          use_cases_page: require("./src/schemas/use_cases_page.json"),
          use_case: require("./src/schemas/use_case.json"),
        },
        typePathsFilenamePrefix: "prismic-typepaths---powerhouse-site",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /vectors/, // See below to configure properly
        },
      },
    },
  ],
}
