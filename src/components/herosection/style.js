import styled from 'styled-components'
import background from '../../images/home_hero_bg.png'

export const Hero = styled.main`
  position: relative;
  padding: 50px 0;
  color: white;
  background-color: #314351;
  background-repeat: no-repeat;
  background-image: ${(props) => (props.bg ? `url(${background})` : 'none')};
  background-attachment: scroll;
  background-position: bottom right;
`

export const HeroHeading = styled.h1`
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
`

export const HeroDesc = styled.p`
  opacity: 0.8;
`
