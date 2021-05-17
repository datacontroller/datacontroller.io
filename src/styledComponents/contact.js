import React from 'react'
import styled, { css } from 'styled-components'

export const StyledHeading = styled.h3`
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
`

export const StyledLabel = styled.label`
  margin-bottom: 0;
`

const contactFormStyles = css`
  border-color: #e1e1e1;
  background-color: #f8f8f8;
  color: #919191;
  &:focus {
    background-color: #f8f8f8;
    box-shadow: none;
  }
`

export const StyledInput = (props) => (
  <input styles={contactFormStyles} {...props} />
)

export const StyledTextArea = (props) => (
  <textarea styles={contactFormStyles} {...props} />
)

export const ContactBackground = styled.img.attrs((props) => ({
  alt: props.info || '',
  title: props.info || ''
}))`
  max-width: 100%;
`
