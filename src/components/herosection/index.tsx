import React from 'react'
import { PageProps, Link } from 'gatsby'

import styled from 'styled-components'

import { Hero, HeroHeading, HeroDesc } from './style'
import { BottomSectionArrow, OutlineButton } from '../shared/styledComponents'
import { Container } from '../shared'

import { pathPrefix } from '../../../gatsby-config.js'

type DataProps = {
  location: Location
  heading: string
  desc: string
}

const HeroSection: React.FC<PageProps<DataProps>> = ({
  location,
  heading,
  desc
}) => (
  <Hero bg={location.pathname === pathPrefix + '/'}>
    <Container>
      <HeroHeading>{heading}</HeroHeading>
      <HeroDesc>{desc}</HeroDesc>
      {location.pathname === pathPrefix + '/' && (
        <Link to="/contact/">
          <OutlineButton>Try Data Controller</OutlineButton>
        </Link>
      )}
    </Container>
    <BottomSectionArrow />
  </Hero>
)

export default HeroSection
