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
      resolve: "@walltowall/gatsby-source-prismic-schemas",
      options: {
        /**
         * Provide an object of Prismic custom type JSON schemas to load into
         * Gatsby. This is required.
         *
         * If you are using gatsby-source-prismic, this should be the same set of
         * schemas provided to that plugin.
         */
        schemas: {
          // Your custom types mapped to schemas
        },
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: "power-house",
        schemas: {
          // all the schemas here
          product_page: require("./src/schemas/product_page.json"),
          product: require("./src/schemas/product.json"),
          Process: require("./src/schemas/process.json"),
          about: require("./src/schemas/about.json"),

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
