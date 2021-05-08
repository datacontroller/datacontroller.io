import { PageProps, Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import {
  SectionHeading,
  SectionDesc,
  SolidButton
} from '../components/shared/styledComponents'

import { FAQ } from '../styledComponents/faq'

type DataProps = {
  site: {
    meta: {
      title: string
      description: string
      social: { linkedin: string }
    }
  }
}

const Faq: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      heading="Data Controller’s Knowledge Base"
      desc="A section dedicated to news, updates and educational pieces."
    >
      <Seo title="Blog" />
    </Layout>
  )
}

export default Faq
