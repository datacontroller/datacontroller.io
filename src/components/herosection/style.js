import React from "react";
import styled from "styled-components";
import background from "../../images/home_hero_bg.png";

export const Hero = styled.main`
  position: relative;
  padding: 50px 0;
  color: white;
  background-color: #314351;
  background-repeat: no-repeat;
  background-image: ${(props) => (props.bg ? `url(${background})` : "none")};
  background-attachment: scroll;
  background-position: bottom right;
`;

export const HeroHeading = styled.h1`
  letter-spacing: 1px;
  font-weight: 400;
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
`;

export const HeroDesc = styled.p`
  opacity: 0.8;
`;

const Button = styled.button`
  margin: 50px 0;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  border-width: 2px;
`;

export const StyledButton = ({ children }) => (
  <Button type="button" className="btn btn-outline-light">
    {children}
  </Button>
);
