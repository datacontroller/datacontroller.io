import { Link, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import {
  SectionHeading,
  SectionDesc,
  SolidButton
} from '../components/shared/styledComponents'

import Post from './postpreview'
import { SideBar } from './sidebar'

const BlogListTemplate = ({ data, location, pageContext }) => {
  const posts = data.remark.posts
  return (
    <Layout
      location={location}
      heading="Data Controller’s Knowledge Base"
      desc="A section dedicated to news, updates and educational pieces."
    >
      <Seo title="Blog" />
      <Section color="black" bgColor="white" bottomArrow={false}>
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              {posts.map((data, i) => (
                <Post key={i} post={data.post} />
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <SideBar pageContext={pageContext} />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
  query BlogListQuery(
    $filter: MarkdownRemarkFilterInput!
    $skip: Int!
    $limit: Int!
  ) {
    remark: allMarkdownRemark(
      filter: $filter
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
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
`

// tags
