require('dotenv').config();

module.exports = {
  // pathPrefix: `/bookshelf.ymiyo.com/`,
  pathPrefix: `/`,
  siteMetadata: {
    title: `Y.MIYO本棚`,
    name: `yuuki miyoshi`,
    copyrightDate: `2020`,
    portfolioUrl: `https://yuukimiyoshi.info`,
    // siteUrl: `https://yuukimiyo.github.io`,
    siteUrl: `https://bookshelf.ymiyo.com`,
    description: `Y.MIYO本棚は管理人の個人的な読書ログサイトです。`,
    hero: {
      heading: `Y.MIYO本棚`,
      subtitle: `個人の読書ログです`,
      maxWidth: 652,
    },
    social: [
      /*
      {
        name: `twitter`,
        url: `https://twitter.com/yuuki_miyo`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/yuuki.miyo`,
      },
      */
      {
        name: `github`,
        url: `https://github.com/yuukimiyo`,
      },
    ],
  },
  plugins: [
    {
      // resolve: "@narative/gatsby-theme-novela",
      resolve: "gatsby-theme-novela-custom",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        // basePath: "/bookshelf.yuukimiyoshi.com/",
        authorsPage: true,
        sources: {
          local: false,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
