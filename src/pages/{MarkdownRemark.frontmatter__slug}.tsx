import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'

const StyledMarkdown = styled.div`
  color: rgb(102, 102, 102);
  h2,
  h3,
  h4,
  strong {
    color: rgb(34, 34, 34);
  }
  h2 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica,
      Arial, sans-serif;
  }
`

export default function Template({ data, location }) {
  const { frontmatter, html } = data?.markdownRemark
  return (
    <Layout
      location={location}
      heading={frontmatter.heading}
      desc={frontmatter.desc}
    >
      <Seo title={frontmatter.title} />
      <Section color="black" bgColor="white" bottomArrow={false}>
        <StyledMarkdown dangerouslySetInnerHTML={{ __html: html }} />
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        heading
        desc
      }
    }
  }
`
