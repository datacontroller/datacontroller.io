import styled from 'styled-components'

export const StyledHeading = styled.h3`
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
`

export const StyledLabel = styled.label`
  margin-bottom: 0;
`

export const ContactBackground = styled.img.attrs((props) => ({
  alt: props.info || '',
  title: props.info || ''
}))`
  max-width: 100%;
`
