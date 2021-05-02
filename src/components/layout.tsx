import React from "react";

// import Navibar from '../navibar/navibar'
// import Footer from '../footer/footer'

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="container">
      {/*<Navibar location={location} />*/}
      {/*<Footer />*/}
    </div>
  );
};

export default Layout;
