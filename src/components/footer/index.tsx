import React from 'react'
import { Link } from 'gatsby'

// import dcLogo from "../../images/dclogo.png";

import { Container, Section } from '../shared'
import { SolidButton } from '../shared/styledComponents'
import { StyledHeading, StyledDesc, InputStyled, StyledAnchor } from './style'

const anchorStyles = {
  color: '#888'
}

const Footer = () => (
  <Section bottomArrow={false}>
    <div className="row">
      <div className="col-md-3 me-md-5">
        <StyledHeading>Data Controller</StyledHeading>
        <StyledDesc>
          Data Controller is a product of 4GL Apps, a brand of Bowe IO Ltd,
          which is a UK company with a focus on SAS Software,{' '}
          <StyledAnchor href="https://sasapps.io">Apps</StyledAnchor>, and
          Services.
        </StyledDesc>
      </div>
      <div className="col-md-3">
        <StyledHeading>Newsletter</StyledHeading>
        <form
          className="kwes-form"
          method="POST"
          action="https://kwes.io/api/foreign/forms/mxKuyK4lxZWnG2WNH3ga"
        >
          <div className="mb-3">
            <InputStyled
              type="email"
              name="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email Address*"
              required
            />
          </div>
          <div className="mb-3">
            <InputStyled
              type="text"
              name="name"
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-3">
            <InputStyled
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <SolidButton>Subscribe</SolidButton>
        </form>
      </div>
      <div className="col-md-3">
        <StyledHeading>Other Resources</StyledHeading>
        <StyledDesc>
          Visit our educational and fun SAS® software quiz{' '}
          <StyledAnchor href="https://sasensei.com">Sasensei</StyledAnchor> and
          test your knowledge of SAS topics.
        </StyledDesc>
      </div>
    </div>
  </Section>
)

export default Footer
