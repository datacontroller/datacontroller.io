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

const Home: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  return (
    <Layout
      location={location}
      title="Flexible and Secure Data Modification"
      desc="Data Controller for SAS® enables business users to update IT owned source tables, secured by review / approve workflow and full audit trail."
    ></Layout>
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
