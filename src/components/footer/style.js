import React from 'react'
import styled from 'styled-components'

export const StyledHeading = styled.h6`
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  color: #888;
`
export const StyledDesc = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
`

export const InputStyled = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.9rem;
  &:focus {
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
  }
`

const Anchor = styled.a`
  color: #d4d4d4;
  text-decoration: none;
  &:hover {
    color: white;
  }
`

export const StyledAnchor = ({ children, href }) => (
  <Anchor href={href} target="_blank" rel="noopener">
    {children}
  </Anchor>
)
