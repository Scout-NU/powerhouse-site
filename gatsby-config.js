/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: '@walltowall/gatsby-source-prismic-schemas',
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
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        // Example: 'gatsby-source-prismic-test-site' if your prismic.io address
        // is 'gatsby-source-prismic-test-site.prismic.io'.
        repositoryName: 'power-house',
        schemas: {
          // all the schemas here
          test: require("./src/schemas/test.json"),
          Process: require("./src/schemas/Process.json")

       },
       typePathsFilenamePrefix:
       'prismic-typepaths---powerhouse-site',
      }
    },


  ],
}
