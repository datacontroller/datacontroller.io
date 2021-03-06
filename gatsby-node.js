const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

const recentPosts = []
const archives = {}
const tagsFrequent = []

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`)
  const blogListTemplate = path.resolve(`./src/templates/blog-list.tsx`)
  const blogSearchTemplate = path.resolve(`./src/templates/blog-search.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY")
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 1000) {
          group(field: frontmatter___tags) {
            name: fieldValue
            totalCount
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  recentPosts.push(
    ...posts.slice(0, 10).map((p) => ({
      slug: p.fields.slug,
      title: p.frontmatter.title
    }))
  )

  const tags = result.data.tagsGroup.group
  tagsFrequent.push(
    ...tags.sort((a, b) => b.totalCount - a.totalCount).slice(0, 10)
  )

  // side bar data for each page
  posts.forEach((d) => {
    if (archives[d.frontmatter.date] == null) archives[d.frontmatter.date] = 0
    archives[d.frontmatter.date]++
  })

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          id: post.id,
          archives,
          recentPosts,
          tags: tagsFrequent,
          previousPostId,
          nextPostId
        }
      })
    })
  }

  // Create blog-list pages
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogListTemplate,
      context: {
        page: 'index',
        archives,
        recentPosts,
        tags: tagsFrequent,
        filter: { fileAbsolutePath: { regex: '/content/blog/' } },
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPages,
        currentPage: i + 1
      }
    })
  })

  for (year in archives) {
    const count = archives[year]
    const numPagesOfYear = Math.ceil(count / postsPerPage)
    Array.from({ length: numPagesOfYear }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/${year}/` : `/${year}/page/${i + 1}`,
        component: blogListTemplate,
        context: {
          page: 'year',
          archives,
          recentPosts,
          tags: tagsFrequent,
          filter: {
            frontmatter: { date: { gte: year, lt: year + 1 } },
            fileAbsolutePath: { regex: '/content/blog/' }
          },
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numPagesOfYear,
          currentPage: i + 1,
          year: year
        }
      })
    })
  }

  tags.forEach((tag) => {
    const count = tag.totalCount
    const numPagesOfTag = Math.ceil(count / postsPerPage)
    Array.from({ length: numPagesOfTag }).forEach((__, i) => {
      const tagPath = `/category/${_.kebabCase(tag.name)}/`
      createPage({
        path: i === 0 ? tagPath : `${tagPath}page/${i + 1}`,
        component: blogListTemplate,
        context: {
          page: 'category',
          archives,
          recentPosts,
          tags: tagsFrequent,
          filter: { frontmatter: { tags: { in: [tag.name] } } },
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages: numPagesOfTag,
          currentPage: i + 1,
          tag: tag.name
        }
      })
    })
  })

  createPage({
    path: '/search/',
    component: blogSearchTemplate,
    context: {
      page: 'search',
      archives,
      recentPosts,
      tags: tagsFrequent
    }
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path == '/404/') {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        archives,
        recentPosts,
        tags: tagsFrequent
      }
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
      author: String
      authorLink: String
      previewImg: File @fileByRelativePath
      tags: [String!]!
    }

    type Fields {
      slug: String
    }
  `)
}
