import React from 'react'
import styled from 'styled-components'

const BottomArrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  background: inherit;
  transform: translateX(-50%) rotate(45deg);
  left: 50%;
  // right: 0;
  // margin-left: auto;
  // margin-right: auto;
  z-index: 10;
`
const BottomArrowWrapper = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  overflow: hidden;
  margin-top: 50px;
  background-color: inherit;
`

export const BottomSectionArrow = () => (
  <BottomArrowWrapper>
    <BottomArrow />
  </BottomArrowWrapper>
)

export const SectionHeading = styled.h2`
  text-align: ${(props) => (props.center === 'no' ? 'left' : 'center')};
  letter-spacing: 1px;
  font-weight: 400;
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
`

export const SectionDesc = styled.p`
  text-align: ${(props) => (props.center === 'no' ? 'left' : 'center')};
  opacity: ${(props) => props.opacity ?? 0.6};
  a {
    color: #8ec63f;
    text-decoration: none;
    &:hover {
      color: #bbdc8b;
    }
  }
`
const StyledSolidButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  border-width: 2px;
  width: 100%;
  max-width: 250px;
  &:hover {
    opacity: 0.9;
  }
  &.btn-dark {
    background-color: #2e4252;
  }
`

export const SolidButton = ({ children, theme = 'light' }) => (
  <StyledSolidButton type="submit" className={`btn btn-${theme}`}>
    {children}
  </StyledSolidButton>
)

const StyledOutlineButton = styled.button`
  margin: 50px 0;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  border-width: 2px;
`

export const OutlineButton = ({ children }) => (
  <StyledOutlineButton type="button" className="btn btn-outline-light">
    {children}
  </StyledOutlineButton>
)
