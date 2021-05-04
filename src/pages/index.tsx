import { PageProps, Link, graphql } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import { Section } from "../components/shared";

import {
  SectionHeading,
  SectionDesc,
} from "../components/shared/styledComponents";

import leftArt from "../images/home_illustration2.png";
import rightArt from "../images/home_illustration1.png";

type DataProps = {
  site: {
    meta: {
      title: string;
      description: string;
      social: { linkedin: string };
    };
  };
};

const artStyles = {
  maxWidth: "100%",
  display: "block",
  margin: "0 auto",
  padding: "20px",
};

const Home: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      title="Flexible and Secure Data Modification"
      desc="Data Controller for SAS® enables business users to update IT owned source tables, secured by review / approve workflow and full audit trail."
    >
      <Section color="black" bgColor="white">
        <div className="row">
          <div className="col-md-3">
            <img src={leftArt} style={artStyles} alt="Business Owner" />
          </div>
          <div className="col-md-6">
            <SectionHeading>Who is Data Controller for?</SectionHeading>
            <SectionDesc>
              Data Controller is designed to provide business users with a tool
              which can be included in their overall armoury for regulatory
              reporting.
            </SectionDesc>

            <SectionDesc>
              Having worked in data-intensive SAS environments for many years,
              the founders of Data Controller experienced first hand the
              inefficient practices that reporting teams had to endure when
              changes needed to be made to the data and source system access
              wasn’t possible.
            </SectionDesc>

            <SectionDesc>
              It was clear to see that users needed the ability to self-serve
              their data updates. That data owners should have the chance to
              review and approve those updates. And that all changes to data
              should be safe and secure, as well as tracked and visible for
              audit reasons.
            </SectionDesc>

            <SectionDesc>
              The Data Controller is useful for any Enterprise that needs to
              perform manual data uploads into their preferred database, in
              real-time, with full validation, approval, security, and control.
            </SectionDesc>
          </div>
          <div className="col-md-3">
            <img
              src={rightArt}
              style={artStyles}
              alt="Clinical Research Data"
            />
          </div>
        </div>
      </Section>
      <Section color="black" bgColor="white">
        <div className="offset-md-2 col-md-8">
          <SectionDesc>Devoted to</SectionDesc>
          <SectionHeading>SAS® Users, Admins and Developers</SectionHeading>
          <SectionDesc>
            Most (if not all) SAS users have the basic need to load, modify or
            delete data in SAS. They can typically achieve this by:
          </SectionDesc>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  {
    site {
      meta: siteMetadata {
        title
        description
        social {
          linkedin
        }
      }
    }
  }
`;
