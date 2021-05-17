import React from 'react'
import styled from 'styled-components'
import { ImArrowRight } from 'react-icons/im'

export const CenteredText = styled.p`
  text-align: center;
  max-width: 300px;
  display: block;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1;
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
`
export const Art = styled.img.attrs((props) => ({
  alt: props.info || '',
  title: props.info || ''
}))`
  max-width: 100%;
  display: block;
  margin: 0 auto;
  padding: 20px;
`

const ArrowHolder = styled.div`
  display: inline-block;
  border-radius: 50px;
  padding: 15px 17px;
  color: white;
  background-color: ${(props) =>
    props.bgColor === 'red' ? '#ed1c1c' : '#90c445'};
`
const RightArrow = ({ bgColor = '' }) => (
  <ArrowHolder bgColor={bgColor}>
    <ImArrowRight size={24} />
  </ArrowHolder>
)
const ReasonDesc = styled.p`
  display: inline-block;
  width: calc(100% - 60px);
  vertical-align: top;
  margin: 20px 0 0;
  min-height: 60px;
  line-height: 1;
  padding-left: 20px;
  text-transform: uppercase;
`

export const Reason = ({ text, bgColor = '' }) => (
  <>
    <RightArrow bgColor={bgColor} />
    <ReasonDesc>{text}</ReasonDesc>
  </>
)

const IconHolderStyled = styled.div`
  display: inline-block;
  border: 1px solid #314351;
  color: #314351;
  border-radius: 50px;
  padding: 15px 17px;
  vertical-align: top;
`

const IconHolder = ({ Icon }) => {
  return (
    <IconHolderStyled>
      <Icon size={24} />
    </IconHolderStyled>
  )
}

const FeatureDetails = styled.div`
  display: inline-block;
  width: calc(100% - 60px);
  padding-left: 20px;
  margin-bottom: 20px;
`
const FeatureTitle = styled.h5`
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
`
const FeatureDesc = styled.p`
  opacity: 0.5;
  font-size: 0.9rem;
`

export const Feature = ({ title, desc, Icon, className }) => (
  <div className={className ?? 'col-md-4'}>
    <IconHolder Icon={Icon} />
    <FeatureDetails>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDesc>{desc}</FeatureDesc>
    </FeatureDetails>
  </div>
)
