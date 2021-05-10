import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { pathPrefix } from '../../gatsby-config.js'

import { StyledHeading } from '../styledComponents/blog'

const linkStyles = css`
  color: #314351;
  opacity: 0.8;
  text-decoration: none;
  display: block;
  &:hover {
    color: #314351;
    opacity: 1;
    text-decoration: underline;
  }
  font-size: 0.9rem;
`
const ArchiveLink = styled((props) => <Link {...props} />)`
  ${linkStyles}
`
const RecentPostLink = styled((props) => <Link {...props} />)`
  ${linkStyles}
  padding: 3px;
  border-bottom: 3px solid #e1e1e1;
  &:last-child {
    border-bottom: none;
  }
`
const SideBarSection = styled.div`
  margin-bottom: 20px;
`

const Archives = ({ archives }) => (
  <>
    {Object.keys(archives).map((year, index) => (
      <ArchiveLink key={year} to={`${pathPrefix}/${year}`}>
        {year} ({archives[year]})
      </ArchiveLink>
    ))}
  </>
)

const RecentPosts = ({ posts }) => (
  <>
    {posts.map((post) => (
      <RecentPostLink key={post.slug} to={post.slug}>
        {post.title}
      </RecentPostLink>
    ))}
  </>
)

export const SideBar = ({ pageContext }) => (
  <>
    <SideBarSection>
      <StyledHeading>Recent Posts</StyledHeading>
      <RecentPosts posts={pageContext.recentPosts} />
    </SideBarSection>
    <SideBarSection>
      <StyledHeading>Archives</StyledHeading>
      <Archives archives={pageContext.archives} />
    </SideBarSection>
    <StyledHeading>Categories</StyledHeading>
  </>
)
