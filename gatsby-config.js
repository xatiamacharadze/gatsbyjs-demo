require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Mariam Topuria`,
    siteUrl: `https://www.drmariamtopuria.com`,
    description: `Dr. Mariam Topuria`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
