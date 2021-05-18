import { Link, graphql } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'
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

  const iniPath =
    pageContext.page == 'index'
      ? `/blog/`
      : pageContext.page == 'year'
      ? `/${pageContext.year}/`
      : pageContext.page == 'category'
      ? `/category/${kebabCase(pageContext.tag)}/`
      : null

  const pageInfo = `Page ${pageContext.currentPage} of ${pageContext.numPages}`
  Array.from({ length: 5 }, (v, k) => k + 1)
  const paginationJSX = Array.from(
    { length: pageContext.numPages },
    (_, i) => i + 1
  ).map((pageIndex) => {
    const link = pageIndex === 1 ? iniPath : `${iniPath}page/${pageIndex}`
    return (
      <Link
        to={link}
        className={`btn btn-outline-dark btn-sm ${
          pageIndex === pageContext.currentPage ? 'disabled' : ''
        }`}
        style={{
          borderRadius: '50%',
          padding: '.375rem .75rem',
          margin: '0.25rem'
        }}
      >
        {pageIndex}
      </Link>
    )
  })
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
            <span className="float-start">{paginationJSX}</span>
            <span className="float-end">{pageInfo}</span>
          </div>
          <div className="col-md-5">
            <SideBar pageContext={pageContext} location={location} />
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
`

// tags
