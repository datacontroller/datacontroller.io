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
      title="Data Controller – FAQ"
      desc="Most common user questions and answers regarding the Data Controller"
    >
      <Seo title="FAQ" />
      <Section color="black" bgColor="white">
        <div className="row">
          <div className="col-md-8">
            <FAQ
              question="DOES THE DATA CONTROLLER ENABLE USERS TO CHANGE THE DATA MODEL (DATA STRUCTURE)?"
              answer="A: No. This is not (and will not be) part of the feature set. Users can submit changes to data, but they cannot affect the number or type of columns in a table."
            ></FAQ>
            <FAQ
              question="Will this tool allow tables to be updated in my preferred database?"
              answer="A: If you have a SAS connector (ACCESS engine) then the answer is likely yes. However, if your tables have database specific features (eg auto-generated keys) or non-standard column types (eg images or BLOBS) then the table may not be compatible. Please contact us for more information, as there are likely to be workarounds."
            ></FAQ>
            <FAQ
              question="Will this tool work on tables with Retained / Surrogate keys?"
              answer="A: Yes, just define your business / natural key in the RK_UNDERLYING field of the configuration table."
            ></FAQ>
          </div>
        </div>
      </Section>
      <Section>
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <SectionDesc opacity="1">
              For any further information regarding Data Controller please
              reference our <Link to="/contact/">Contact page</Link> and send us
              your questions. Our team will review it and follow up within 24
              hours.
            </SectionDesc>
          </div>
        </div>
      </Section>
      <Section color="black" bgColor="white" bottomArrow={false}>
        <Link
          to="/contact/"
          className="d-flex justify-content-center"
          style={{
            textDecoration: 'none'
          }}
        >
          <SolidButton theme="dark">Contact Us</SolidButton>
        </Link>
      </Section>
    </Layout>
  )
}

export default Faq
