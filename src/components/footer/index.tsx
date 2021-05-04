import React from "react";
import { Link } from "gatsby";

// import dcLogo from "../../images/dclogo.png";

import { Container, Section } from "../shared";
import {
  StyledHeading,
  StyledDesc,
  InputStyled,
  StyledButton,
  StyledAnchor,
} from "./style";

const anchorStyles = {
  color: "#888",
};

const Footer = () => (
  <Section bottomArrow={false}>
    <div className="row">
      <div className="col-md-3 me-md-5">
        <StyledHeading>Data Controller</StyledHeading>
        <StyledDesc>
          Data Controller is a product of Analytium Ltd, a software company
          whose focal point is{" "}
          <StyledAnchor href="https://sasapps.io">SAS App</StyledAnchor>{" "}
          development and education.
        </StyledDesc>
      </div>
      <div className="col-md-3">
        <StyledHeading>Newsletter</StyledHeading>
        <form>
          <div className="mb-3">
            <InputStyled
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email Address*"
            />
          </div>
          <div className="mb-3">
            <InputStyled
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <InputStyled
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>
          <StyledButton>Subscribe</StyledButton>
        </form>
      </div>
      <div className="col-md-3">
        <StyledHeading>Other Resources</StyledHeading>
        <StyledDesc>
          Visit our educational and fun SAS® software quiz{" "}
          <StyledAnchor href="https://sasensei.com">Sasensei</StyledAnchor> and
          test your knowledge of SAS topics.
        </StyledDesc>
      </div>
    </div>
  </Section>
);

export default Footer;
