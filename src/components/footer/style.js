import React from "react";
import styled from "styled-components";

export const StyledHeading = styled.h5`
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  color: #888;
`;
export const StyledDesc = styled.p`
  color: #aaaaaa;
  font-size: 0.9rem;
`;

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
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  border-width: 2px;
  width: 100%;
  max-width: 250px;
`;

export const StyledButton = ({ children }) => (
  <Button type="submit" className="btn btn-light">
    {children}
  </Button>
);

const Anchor = styled.a`
  color: #d4d4d4;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const StyledAnchor = ({ children, href }) => (
  <Anchor href={href} target="_blank">
    {children}
  </Anchor>
);
