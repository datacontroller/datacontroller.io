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
      heading="Book a Demo"
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

            <form
              className="kwes-form"
              method="POST"
              action="https://kwes.io/api/foreign/forms/mxKuyK4lxZWnG2WNH3ga"
            >
              <div className="mb-3">
                <StyledLabel htmlFor="name" className="form-label">
                  Name
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  rules="required|max:50"
                  custom="required|max:50"
                />
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="email" className="form-label">
                  Email address
                </StyledLabel>
                <StyledInput
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  rules="required|email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="subject" className="form-label">
                  Subject
                </StyledLabel>
                <StyledInput
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  rules="required|max:50"
                />
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="mesage" className="form-label">
                  Message
                </StyledLabel>
                <StyledTextArea
                  className="form-control"
                  id="mesage"
                  name="message"
                  rows="5"
                  rules="required|max:200"
                ></StyledTextArea>
              </div>
              <div className="mb-3">
                <SolidButton theme="dark">Submit</SolidButton>
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
