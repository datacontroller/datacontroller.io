import React from 'react'
import styled from 'styled-components'

import { PageProps } from 'gatsby'
import { BottomSectionArrow } from './styledComponents'
import { Container } from './'

type DataProps = {
  children?: React.ReactNode
  color?: string
  bgColor?: string
  bottomArrow?: boolean
}

const StyledSection = styled.div`
  position: relative;
  padding: 50px 0;
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgColor || '#314351'};
`

export const Section: React.FC<PageProps<DataProps>> = ({
  children,
  bgColor,
  color,
  bottomArrow = true
}) => {
  return (
    <StyledSection bgColor={bgColor} color={color}>
      <Container>{children}</Container>
      {bottomArrow && <BottomSectionArrow />}
    </StyledSection>
  )
}
