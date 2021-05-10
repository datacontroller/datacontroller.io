import React from 'react'
import { PageProps } from 'gatsby'

import Navibar from './navibar'
import HeroSection from './herosection'
import Footer from './footer'

type DataProps = {
  children?: React.ReactNode
  heroSection: boolean
}

const Layout: React.FC<PageProps<DataProps>> = ({
  location,
  children,
  heroSection = true,
  heading,
  desc
}) => {
  return (
    <>
      <Navibar location={location} />
      {heroSection && (
        <HeroSection location={location} heading={heading} desc={desc} />
      )}
      {children}
      <Footer />
    </>
  )
}

export default Layout
