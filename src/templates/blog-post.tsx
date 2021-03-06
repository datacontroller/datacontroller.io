import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import Post from './post'
import { SideBar } from './sidebar'

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const { post } = data
  const { previewImg } = post.frontmatter

  return (
    <Layout location={location} heroSection={false}>
      <Seo
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description}
        previewImg={
          previewImg?.childImageSharp?.gatsbyImageData?.images?.fallback?.src
        }
      />
      <Section color="black" bgColor="white" bottomArrow={false}>
        <div className="row">
          <div className="col-md-7">
            <Post post={post} location={location} />
          </div>
          <div className="col-md-5">
            <SideBar pageContext={pageContext} location={location} />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostByPath($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        author
        authorLink
        previewImg {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        tags
      }
    }
  }
`
