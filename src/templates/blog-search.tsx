import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { useFlexSearch } from 'react-use-flexsearch'
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

const BlogSearchTemplate = ({ location, pageContext }) => {
  const queryData = useStaticQuery(graphql`
    query {
      localSearchBlog {
        index
        store
      }
    }
  `)

  const params = new URLSearchParams(location.search.substring(1))
  const query = params.get('s')

  const posts = useFlexSearch(
    query,
    queryData.localSearchBlog.index,
    queryData.localSearchBlog.store
  )
  const postsJSX = []

  if (query) {
    posts.forEach((post, i) => {
      const _post = {
        id: post.id,
        html: post.html,
        fields: {
          slug: post.slug
        },
        frontmatter: {
          title: post.title,
          date: post.date,
          previewImg: post.previewImg
        }
      }

      postsJSX.push(<Post key={i} post={_post} />)
    })
  }
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
              {query ? (
                <h1>
                  {postsJSX.length} results found related to &quot;{query}&quot;
                </h1>
              ) : (
                <h1>No Query Entered</h1>
              )}
              {postsJSX}
            </div>
          </div>
          <div className="col-md-5">
            <SideBar pageContext={pageContext} location={location} />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default BlogSearchTemplate
