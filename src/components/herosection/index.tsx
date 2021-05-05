import React from 'react'
import { PageProps } from 'gatsby'

import styled from 'styled-components'

import { Hero, HeroHeading, HeroDesc, StyledButton } from './style'
import { BottomSectionArrow } from '../shared/styledComponents'
import { Container } from '../shared'

type DataProps = {
  location: Location
  title: string
  desc: string
}

const HeroSection: React.FC<PageProps<DataProps>> = ({
  location,
  title,
  desc
}) => (
  <Hero bg={location.pathname === '/'}>
    <Container>
      <HeroHeading>{title}</HeroHeading>
      <HeroDesc>{desc}</HeroDesc>
      {location.pathname === '/' && (
        <StyledButton>Try Data Controller</StyledButton>
      )}
    </Container>
    <BottomSectionArrow />
  </Hero>
)

export default HeroSection
