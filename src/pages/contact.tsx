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

const Contact: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      title="Book a Demo"
      desc="Schedule a demonstration of the Data Controller to see our latest features and explore use cases"
    >
      <Seo title="Contact" />
    </Layout>
  )
}

export default Contact
