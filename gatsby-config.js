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
  pathPrefix: '',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Data Controller | Flexible and Secure SAS® Data Modification`,
        short_name: `Data Controller`,
        description: `Data Controller for SAS® is dedicated to helping users, admins and developers manage their data. A zero code approach with Data Lineage, Catalog, Dictionary, Validation, Workflow, Alerts and more.`,
        homepage_url: 'https://datacontroller.io/',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#314351',
        display: 'standalone',
        icon: 'src/images/favicon.png',
        icon_options: {
          purpose: `maskable`
        },
        cache_busting_mode: 'none'
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
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          }
        ]
      }
    },
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
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'blog',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: 'speed',

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            remark: allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/content/blog/"}}) {
              posts: edges {
                post: node {
                  id
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    author
                    authorLink
                    previewImg {
                      childImageSharp {
                        gatsbyImageData(layout: CONSTRAINED)
                      }
                    }
                  }
                }
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title', 'html'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        // store: ['id', 'path', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.remark.posts.map((data) => ({
            id: data.post.id,
            slug: data.post.fields.slug,
            title: data.post.frontmatter.title,
            date: data.post.frontmatter.date,
            previewImg: data.post.frontmatter.previewImg,
            html: data.post.html
          }))
      }
    }
  ]
}
