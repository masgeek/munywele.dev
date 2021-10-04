module.exports = {
  siteMetadata: {
    siteUrl: "https://mariom.dev",
    title: "mariom.dev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-B540V28SCK",
          // Setting this parameter is optional
          anonymize: true,
        },
        environments: ['production']
      },
    },
  ],
};
