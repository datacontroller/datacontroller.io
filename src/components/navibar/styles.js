import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

// styles
export const navBarStyles = {
  padding: "0",
  backgroundColor: "#314351",
  color: "white",
  fontSize: "0.85rem",
};
export const logoStyles = {
  height: "55px",
};
export const ulStyles = {
  marginLeft: "auto",
};

const LinkUnderlineStyles = css`
  content: " ";
  position: absolute;
  width: calc(100% - 1.6rem);
  height: 2px;
  bottom: 0;
  background: white;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

// styled components
export const Li = styled.li`
  position: relative;
  @media (min-width: 992px) {
    &:after {
      content: " ";
      position: absolute;
      width: 1px;
      height: 50%;
      top: 25%;
      right: 0;
      background: white;
    }
    &:nth-last-child(1) {
      &:after {
        display: none;
      }
    }
  }
`;
export const StyledLink = styled((props) => <Link {...props} />)`
  padding-right: 0.8rem !important;
  padding-left: 0.8rem !important;
  color: white;

  &:before {
    ${LinkUnderlineStyles}
    opacity: ${(props) => (props.active === "yes" ? "1" : 0)};
  }
  &:hover {
    color: white;
    &:before {
      ${LinkUnderlineStyles}
    }
  }
`;
