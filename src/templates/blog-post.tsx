import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import Post from './post'
import { SideBar } from './sidebar'

import getDescription from './shared/getDescription'

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.post
  const { previous, next } = data

  return (
    <Layout location={location} heroSection={false}>
      <Seo
        title={post?.frontmatter?.title}
        description={getDescription(post?.html)}
      />
      <Section color="black" bgColor="white" bottomArrow={false}>
        <div className="row">
          <div className="col-md-7">
            <Post post={post} location={location} />
          </div>
          <div className="col-md-5">
            <SideBar pageContext={pageContext} />
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
