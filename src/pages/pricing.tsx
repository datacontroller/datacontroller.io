import { PageProps, Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import {
  SectionHeading,
  SectionDesc
} from '../components/shared/styledComponents'

import {
  Card,
  CardImg,
  CardBody,
  FeaturedImg,
  FeaturedDesc
} from '../styledComponents/about'

type DataProps = {
  site: {
    meta: {
      title: string
      description: string
      social: { linkedin: string }
    }
  }
}

const Pricing: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      title="DATA CONTROLLER PRICING"
      desc="Our Pricing Goals are to be Transparent, Simple, and Fair"
    >
      <Seo title="Pricing" />
    </Layout>
  )
}

export default Pricing
