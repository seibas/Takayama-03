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
    year: 2021,
    image: 'images/nature.jpg'
  },




  
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
path:`${__dirname}/src/`,
      },
    },
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
          default: require.resolve("./src/templates/markdownpage-template.js"),
        },
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            }
          }
        ]
      },
    },
        `gatsby-plugin-styled-components`],
}
