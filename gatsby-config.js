module.exports = {
  siteMetadata: {
    title: `Gatsby Unsplash`,
    description: `Get the images from Unspalsh`,
    author: `Ranganath`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `Gatsby unsplash`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-unsplash`,
      options: {
        appId: `__ToMf7s2CmgMgFZuUqmgCE_VYtIrXUzaLCiuyTmv8A`,
        collections: [
          `1353633`,
          `1758353`,
          `1971015`,
          `894`,
          `1538150`
        ],
        perPage: `100`
      },
    },
  ],
}
