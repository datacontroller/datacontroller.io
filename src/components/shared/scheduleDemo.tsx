import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FaEnvelope } from 'react-icons/fa'

export const StyledLink = styled((props) => <Link {...props} />)`
  color: rgb(255, 255, 255);
  background-color: rgb(144, 196, 69);
  border-radius: 0px;
  padding: 50px 10px;
  width: 100%;
  margin: 0px;
  border: none;
  position: relative;
  display: block;
  text-decoration: none;
  font-size: 1.3rem;
  line-height: 1.2em;
  text-align: center;
  max-width: 100%;
  font-family: Montserrat, HelveticaNeue, 'Helvetica Neue', Helvetica, Arial;

  svg {
    opacity: 0;
    transition: all 0.5s ease;
  }
  &:hover {
    color: white;
    background-color: #314351;
    svg {
      opacity: 1;
    }
  }

  transition: all 0.3s ease;
`

const iconStyles = { marginTop: '-2px', marginLeft: '5px' }
const textStyles = { opacity: '0.7', fontSize: '1rem', margin: '12px auto 0' }

export const ScheduleDemo = () => {
  return (
    <StyledLink to="/contact">
      <span>
        Schedule a Free Demo <FaEnvelope size={18} style={iconStyles} />
      </span>
      <p style={textStyles}>
        Contact us for a free demonstration of Data Controller.
      </p>
    </StyledLink>
  )
}
