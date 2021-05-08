import React from 'react'
import styled from 'styled-components'

import { FcFaq } from 'react-icons/fc'

const StyledFaq = styled.div`
  margin-bottom: 20px;
`

const StyledQuestion = styled.h5`
  color: #222;
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
`
const StyledAnswer = styled.p`
  color: #919191;
`

const IconHolderStyled = styled.div`
  display: inline-block;
  border: 1px solid #314351;
  background-color: #314351;
  border-radius: 50px;
  padding: 15px 17px;
  vertical-align: top;
`

const FaqDetails = styled.div`
  display: inline-block;
  width: calc(100% - 80px);
  padding-left: 20px;
  margin-bottom: 20px;
`

export const FAQ = ({ question, answer }) => (
  <StyledFaq>
    <IconHolderStyled>
      <FcFaq size={40} />
    </IconHolderStyled>
    <FaqDetails>
      <StyledQuestion>{question}</StyledQuestion>
      <StyledAnswer>{answer}</StyledAnswer>
    </FaqDetails>
  </StyledFaq>
)
