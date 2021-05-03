import React from "react";
import { Link, PageProps } from "gatsby";

import styled, { css } from "styled-components";

import dcLogo from "../../images/dclogo.png";

type DataProps = {
  location: Location;
};

// styles
const navBarStyles = {
  padding: "0",
  backgroundColor: "#314351",
  color: "white",
  fontSize: "0.85rem",
};
const logoStyles = {
  height: "55px",
};
const ulStyles = {
  marginLeft: "auto",
};

const naviLinks = [
  {
    name: "Home",
    url: "/",
    active: false,
  },
  {
    name: "About",
    url: "/about",
    active: false,
  },
  {
    name: "Blog",
    url: "/blog",
    active: false,
  },
  {
    name: "FAQ",
    url: "/faq",
    active: false,
  },
  {
    name: "Documentation",
    url: "https://docs.datacontroller.io/",
    active: false,
  },
  {
    name: "Pricing",
    url: "/pricing",
    active: false,
  },
  {
    name: "Book Demo",
    url: "/contact",
    active: false,
  },
];

const Li = styled.li`
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

export const LinkUnderlineStyles = css`
  content: " ";
  position: absolute;
  width: calc(100% - 1.6rem);
  height: 2px;
  bottom: 0;
  background: white;
  opacity: 1;
  transition: opacity 0.3s ease;
`;
const StyledLink = styled((props) => <Link {...props} />)`
  padding-right: 0.8rem !important;
  padding-left: 0.8rem !important;
  color: white;

  &:before {
    ${LinkUnderlineStyles}
    opacity: ${(props) => (props.active ? "1" : 0)};
  }
  &:hover {
    color: white;
    &:before {
      ${LinkUnderlineStyles}
    }
  }
`;

const Navibar: React.FC<PageProps<DataProps>> = ({ location }) => {
  const currentLink = naviLinks.find((link) => link.url === location.pathname);
  if (currentLink) currentLink.active = true;
  return (
    <nav className="navbar navbar-expand-lg" style={navBarStyles}>
      <div className="container">
        <Link to="/">
          <img src={dcLogo} style={logoStyles} alt="Data Controller Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={ulStyles}>
            {naviLinks.map((link, index) => (
              <Li key={index} className="nav-item">
                <StyledLink
                  to={link.url}
                  className="nav-link"
                  active={link.active}
                >
                  {link.name}
                </StyledLink>
              </Li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navibar;
