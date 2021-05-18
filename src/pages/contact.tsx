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
  StyledLabel,
  ContactBackground
} from '../styledComponents/contact'

import contactBg from '../images/contact_bg.jpg'

import '../styledComponents/contact.css'

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
                <input
                  type="text"
                  className="form-control contactFormStyles"
                  id="name"
                  name="name"
                  rules="required|max:50"
                />
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="email" className="form-label">
                  Email address
                </StyledLabel>
                <input
                  type="email"
                  className="form-control contactFormStyles"
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
                <input
                  type="text"
                  className="form-control contactFormStyles"
                  id="subject"
                  name="subject"
                  rules="required|max:50"
                />
              </div>
              <div className="mb-3">
                <StyledLabel htmlFor="mesage" className="form-label">
                  Message
                </StyledLabel>
                <textarea
                  className="form-control contactFormStyles"
                  id="mesage"
                  name="message"
                  rows="5"
                  rules="required|max:200"
                ></textarea>
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
