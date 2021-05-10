import React from 'react'
import { Link } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'

import styled from 'styled-components'

import getDescription from '../shared/getDescription'

export const StyledLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
  color: black;
  &:hover {
    opacity: 0.8;
    color: black;
  }
`

const StyledTitle = styled.h5`
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  margin-bottom: 0;
`

const StyledDate = styled.span`
  opacity: 0.5;
  font-size: 0.8rem;
`
const StyledDesc = styled.p`
  margin-top: 10px;
  opacity: 0.7;
  font-size: 0.8rem;
  margin-bottom: 100px;
`

const Post = ({ post }) => (
  <div className="col-md-6">
    <StyledLink to={post.fields.slug}>
      <GatsbyImage
        image={post.frontmatter.previewImg.childImageSharp.gatsbyImageData}
        style={{ minHeight: '150px', maxHeight: '200px' }}
        imgStyle={{ objectFit: 'contain' }}
        alt={post.frontmatter.title}
      />

      <StyledTitle>{post.frontmatter.title}</StyledTitle>
      <StyledDate>{post.frontmatter.date}</StyledDate>
      <StyledDesc>{getDescription(post.html)}</StyledDesc>
    </StyledLink>
  </div>
)

export default Post
