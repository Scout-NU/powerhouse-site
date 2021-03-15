/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
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
          Process: require("./src/schemas/Process.json"),
          Contact: require("./src/schemas/Contact.json")
        },
        typePathsFilenamePrefix: "prismic-typepaths---powerhouse-site",
      },
    },
  ],
}
