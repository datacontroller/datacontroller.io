import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import { SideBar } from '../templates/sidebar'

const NotFound = ({ data, location, pageContext }) => (
  <Layout location={location} heroSection={false}>
    <Seo title="Page Not Found" />
    <Section color="black" bgColor="white" bottomArrow={false}>
      <SideBar
        pageContext={pageContext}
        location={location}
        notFoundPage={true}
      />
    </Section>
  </Layout>
)

export default NotFound
