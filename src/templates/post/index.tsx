import React from 'react'
import { Link } from 'gatsby'

import { GatsbyImage } from 'gatsby-plugin-image'

import styled from 'styled-components'

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

const StyledContent = styled.div`
  padding: 15px 0;
  color: #666666;

  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #666666;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #222222;
  }
  img {
    float: right;
    &.aligncenter {
      float: none;
      max-width: 90%;
      display: block;
      margin: 10px auto;
    }
  }
  pre {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.05) 50%,
      transparent 50%,
      transparent
    );
    background-size: 100% 4em;
    border: 1px solid #e1e1e1;

    padding: 2em;
    line-height: 2em;
    font-family: Monaco, 'Andale Mono', 'Courier New', Courier, monospace;
  }
`

const Post = ({ data }) => (
  <div>
    <GatsbyImage
      image={data.post.frontmatter.previewImg.childImageSharp.gatsbyImageData}
      style={{ maxHeight: '500px' }}
      imgStyle={{ objectFit: 'contain' }}
      alt={data.post.frontmatter.title}
    />

    <StyledTitle>{data.post.frontmatter.title}</StyledTitle>
    <StyledDate>
      {data.post.frontmatter.date} / in TAGs / by {data.post.frontmatter.author}
    </StyledDate>
    <StyledContent
      dangerouslySetInnerHTML={{
        __html: data.post.html
      }}
    />
  </div>
)

export default Post
