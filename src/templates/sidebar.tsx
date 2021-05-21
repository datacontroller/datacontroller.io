import React, { useState, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled, { css } from 'styled-components'
import { pathPrefix } from '../../gatsby-config.js'

import { StyledHeading } from '../styledComponents/blog'
import { SolidButton } from '../components/shared/styledComponents'

const styles = css`
  color: #314351;
  opacity: 0.8;
  font: 13px/1.65em 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 0.9rem;
`

const linkStyles = css`
  ${styles}
  text-decoration: none;
  display: block;
  &:hover {
    color: #314351;
    opacity: 1;
    text-decoration: underline;
  }
`
const ArchiveLink = styled((props) => <Link {...props} />)`
  ${linkStyles}
`
const RecentPostLink = styled((props) => <Link {...props} />)`
  ${linkStyles}
  padding: 3px;
  border-bottom: 3px solid #e1e1e1;
  font-style: italic;
  &:last-child {
    border-bottom: none;
  }
`
const SideBarSection = styled.div`
  margin-bottom: 20px;
`

const StyledInput = styled.input`
  border-color: #e1e1e1;
  background-color: #f8f8f8;
  color: #919191;
  &:focus {
    background-color: #f8f8f8;
    box-shadow: none;
  }
`

const StyledPara = styled.p`
  ${styles}
`

const Archives = ({ archives }) => (
  <>
    {Object.keys(archives)
      .sort()
      .reverse()
      .map((year, index) => (
        <ArchiveLink key={year} to={`/${year}/`}>
          {year} ({archives[year]})
        </ArchiveLink>
      ))}
  </>
)

const Categories = ({ tags }) => (
  <>
    {tags.map((tag, i) => (
      <ArchiveLink key={i} to={`/category/${kebabCase(tag.name)}/`}>
        {tag.name} ({tag.totalCount})
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

export const SideBar = ({ pageContext, location, notFoundPage = false }) => {
  const params = new URLSearchParams(location.search.substring(1))
  const queryUrl = params?.get('s') || ''
  const [query, setQuery] = useState(queryUrl)
  useEffect(() => {
    setQuery(queryUrl)
  }, [queryUrl])

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/search?s=' + query)
  }

  const _handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event)
    }
  }

  return (
    <>
      <SideBarSection>
        {notFoundPage && (
          <>
            <StyledPara>
              <b>Nothing Found</b>
            </StyledPara>
            <StyledPara>
              Sorry, the post you are looking for is not available. Maybe you
              want to perform a search?
            </StyledPara>
          </>
        )}
        <div className="input-group mb-3">
          <StyledInput
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => _handleKeyDown(e)}
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <SolidButton theme="dark" onClick={handleSubmit}>
            Search
          </SolidButton>
          <form onSubmit={handleSubmit}></form>
        </div>
        {notFoundPage && (
          <>
            <StyledPara>
              For best search results, mind the following suggestions:
            </StyledPara>
            <StyledPara>
              <ul>
                <li>Always double check your spelling.</li>
                <li>
                  Try similar keywords, for example: tablet instead of laptop.
                </li>
                <li>Try using more than one keyword.</li>
              </ul>
            </StyledPara>
          </>
        )}
        <StyledHeading>
          {notFoundPage
            ? 'Feel like browsing some posts instead?'
            : 'Recent Posts'}
        </StyledHeading>
        <RecentPosts posts={pageContext.recentPosts} />
      </SideBarSection>
      {!notFoundPage && (
        <>
          <SideBarSection>
            <StyledHeading>Archives</StyledHeading>
            <Archives archives={pageContext.archives} />
          </SideBarSection>
          <SideBarSection>
            <StyledHeading>Categories</StyledHeading>
            <Categories tags={pageContext.tags} />
          </SideBarSection>
        </>
      )}
    </>
  )
}
