import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

// styles
export const logoStyles = {
  height: "55px",
};
export const ulStyles = {
  marginLeft: "auto",
};

export const CustomNavBar = styled.nav`
  padding: 0;
  background-color: #314351;
  color: white;
  font-size: 0.85rem;

  /* Icon 1 */
  #nav-icon1,
  #nav-icon2,
  #nav-icon3,
  #nav-icon4 {
    width: 60px;
    height: 45px;
    position: relative;
    margin: 10px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon1 span,
  #nav-icon3 span,
  #nav-icon4 span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #79a843;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon1 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon1 span:nth-child(2) {
    top: 18px;
  }

  #nav-icon1 span:nth-child(3) {
    top: 36px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon1 span:nth-child(1) {
    top: 18px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  .navbar-toggler:not(.collapsed) #nav-icon1 span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon1 span:nth-child(3) {
    top: 18px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

  /* Icon 2 */

  #nav-icon2 {
  }

  #nav-icon2 span {
    display: block;
    position: absolute;
    height: 9px;
    width: 50%;
    background: #d3531a;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon2 span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  #nav-icon2 span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  #nav-icon2 span:nth-child(1),
  #nav-icon2 span:nth-child(2) {
    top: 0px;
  }

  #nav-icon2 span:nth-child(3),
  #nav-icon2 span:nth-child(4) {
    top: 18px;
  }

  #nav-icon2 span:nth-child(5),
  #nav-icon2 span:nth-child(6) {
    top: 36px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(1),
  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(2),
  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(1) {
    left: 5px;
    top: 7px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(2) {
    left: calc(50% - 5px);
    top: 7px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(5) {
    left: 5px;
    top: 29px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon2 span:nth-child(6) {
    left: calc(50% - 5px);
    top: 29px;
  }

  /* Icon 3 */

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 18px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 36px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon3 span:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  .navbar-toggler:not(.collapsed) #nav-icon3 span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .navbar-toggler:not(.collapsed) #nav-icon3 span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .navbar-toggler:not(.collapsed) #nav-icon3 span:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }

  /* Icon 4 */

  #nav-icon4 {
  }

  #nav-icon4 span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4 span:nth-child(2) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4 span:nth-child(3) {
    top: 36px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  .navbar-toggler:not(.collapsed) #nav-icon4 span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }

  .navbar-toggler:not(.collapsed) #nav-icon4 span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  .navbar-toggler:not(.collapsed) #nav-icon4 span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 39px;
    left: 8px;
  }

  .navbar-toggler {
    padding: 0;
    &:focus {
      box-shadow: none;
    }
  }
`;

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
