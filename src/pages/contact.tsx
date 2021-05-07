import { PageProps, Link, graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import { Section } from '../components/shared'
import {
  SectionHeading,
  SectionDesc,
  StyledButton
} from '../components/shared/styledComponents'

import {
  StyledHeading,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  ContactBackground
} from '../styledComponents/contact'

import contactBg from '../images/contact_bg.jpg'

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
      <Section color="black" bgColor="white" bottomArrow={false}>
        <div className="row">
          <div className="col-md-6">
            <SectionHeading center="no">Schedule a Call</SectionHeading>
            <SectionDesc center="no">
              Feel free to contact us at any time to book a demo and start your
              Data Controller journey. Our team will respond within 24 hours and
              help you proceed with the registration process.
            </SectionDesc>
            <StyledHeading>Contact Us</StyledHeading>

            <form>
              <div className="mb-3">
                <StyledLabel htmlFor="contactName" className="form-label">
                  Name
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control"
                  id="contactName"
                />
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="contactEmail" className="form-label">
                  Email address
                </StyledLabel>
                <StyledInput
                  type="email"
                  className="form-control"
                  id="contactEmail"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="contactSubject" className="form-label">
                  Subject
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control"
                  id="contactSubject"
                />
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="contactMesage" className="form-label">
                  Message
                </StyledLabel>
                <StyledTextArea
                  className="form-control"
                  id="contactMesage"
                  rows="5"
                ></StyledTextArea>
              </div>
              <div className="mb-3">
                <StyledButton theme="dark">Submit</StyledButton>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <ContactBackground src={contactBg} info="Book a Demo" />
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Contact
