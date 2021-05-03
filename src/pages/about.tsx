import { PageProps, Link, graphql } from "gatsby";
import React from "react";

import Layout from "../components/layout";

type DataProps = {
  site: {
    meta: {
      title: string;
      description: string;
      social: { linkedin: string };
    };
  };
};

const About: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      title="Behind Data Controller"
      desc="Data Controller is a product of Analytium Ltd."
    ></Layout>
  );
};

export default About;

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
