import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

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
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: black;
      opacity: 1;
    }
  }
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
  * + h2,
  * + h3 {
    margin: 2rem auto 0.8rem;
  }
  img {
    float: right;
    max-width: 100%;
    &.aligncenter {
      float: none;
      max-width: 90%;
      display: block;
      margin: 10px auto;
    }
  }
  .imgHolder {
    padding: 5px;
    margin-left: 5px;
    float: right;
    text-align: center;
    border: 1px solid #e1e1e1;
    border-radius: 2px;
    font-style: italic;
    font-family: Georgia, 'Times New Roman';
    img {
      float: none;
    }
    > div {
      display: flex;
      span {
        flex-grow: 1;
        width: 0;
      }
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

const Post = ({ data }) => {
  const tagsJSX = (data.post.frontmatter?.tags || []).map((tag, index) => (
    <span key={index}>
      {index > 0 && ', '}
      <Link to={`/category/${kebabCase(tag)}/`} rel="category tag">
        {tag}
      </Link>
    </span>
  ))
  return (
    <div>
      <GatsbyImage
        image={data.post.frontmatter.previewImg.childImageSharp.gatsbyImageData}
        style={{ width: '100%' }}
        imgStyle={{ objectFit: 'contain' }}
        alt={data.post.frontmatter.title}
      />

      <StyledTitle>{data.post.frontmatter.title}</StyledTitle>
      <StyledDate>
        {data.post.frontmatter.date} / in {tagsJSX} / by{' '}
        {data.post.frontmatter.author}
      </StyledDate>
      <StyledContent
        dangerouslySetInnerHTML={{
          __html: data.post.html
        }}
      />
    </div>
  )
}

export default Post
