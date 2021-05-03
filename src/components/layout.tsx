import React from "react";
import { PageProps } from "gatsby";

import Navibar from "./navibar";
// import Footer from '../footer/footer'

type DataProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<PageProps<DataProps>> = ({ children }) => {
  return (
    <Navibar location={location} />
    // {/*<Footer />*/}
  );
};

export default Layout;
