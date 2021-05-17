import React, { useEffect } from 'react'
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
  useEffect(() => {
    if (document.querySelector('script[data-name="kwes-script"]')) return

    const kwesScript = document.createElement('script')
    kwesScript.setAttribute('rel', 'noopener')
    kwesScript.setAttribute('src', 'https://kwes.io/v2/kwes-script.js')
    kwesScript.setAttribute('data-name', 'kwes-script')
    document.head.appendChild(kwesScript)
  })
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
