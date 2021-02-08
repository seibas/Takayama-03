/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: "BeBa",
    description: "webSite - in development",
    author: "Sebastiano Vitturi",
  },




  
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
name: `events`,
path:`${__dirname}/contents/events/`,
      },
    },
        {
          
       resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/pages/markdownpage-template.js"),
        },
      },
    },
        `gatsby-plugin-styled-components`],
}
