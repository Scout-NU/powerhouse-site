/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  /* Your site config here */
  plugins: [
    // {
    //   resolve: ` gatsby-plugin-netlify-headers`,
    //   options: {
    //     headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: true, // boolean to turn off the default security headers
    //     mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
    //     mergeCachingHeaders: true, // boolean to turn off the default caching headers
    //     transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //   },
    // },
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
          test: require("./src/schemas/test.json"),
          Product: require("./src/schemas/ProductPage.json"),
        },
        typePathsFilenamePrefix: "prismic-typepaths---powerhouse-site",
      },
    },
  ],
}
