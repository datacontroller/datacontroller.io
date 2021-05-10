module.exports = {
  siteMetadata: {
    title: `Data Controller | Flexible and Secure SAS® Data Modification`,
    description: `Data Controller for SAS® is dedicated to helping users, admins and developers manage their data. A zero code approach with Data Lineage, Catalog, Dictionary, Validation, Workflow, Alerts and more.`,
    siteUrl: 'https://datacontroller.io/',
    author: {
      name: `Allan Bowe`,
      summary: ``
    },
    social: {
      linkedin: `https://www.linkedin.com/showcase/data_controller/`
    }
  },
  pathPrefix: '/datacontroller.io',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/blog`,
        name: `blog`
      },
      __key: 'blog'
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `./src/markdown-pages`
      },
      __key: 'markdown-pages'
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 750,
              related: false //Optional: Will remove related videos from the end of an embedded YouTube video.
            }
          }
        ]
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,500`],
        display: 'swap'
      }
    }
  ]
}
