import React from 'react'
import { PageProps } from 'gatsby'

import Navibar from './navibar'
import HeroSection from './herosection'
import Footer from './footer'

type DataProps = {
  children?: React.ReactNode
}

const Layout: React.FC<PageProps<DataProps>> = ({
  location,
  children,
  heading,
  desc
}) => {
  return (
    <>
      <Navibar location={location} />
      <HeroSection location={location} heading={heading} desc={desc} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
