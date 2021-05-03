import React from "react";
import { Link, PageProps } from "gatsby";

import dcLogo from "../../images/dclogo.png";

import { navBarStyles, logoStyles, ulStyles, Li, StyledLink } from "./styles";

const naviLinks = [
  {
    name: "Home",
    url: "/",
    active: "no",
  },
  {
    name: "About",
    url: "/about",
    active: "no",
  },
  {
    name: "Blog",
    url: "/blog",
    active: "no",
  },
  {
    name: "FAQ",
    url: "/faq",
    active: "no",
  },
  {
    name: "Documentation",
    url: "https://docs.datacontroller.io/",
    active: "no",
  },
  {
    name: "Pricing",
    url: "/pricing",
    active: "no",
  },
  {
    name: "Book Demo",
    url: "/contact",
    active: "no",
  },
];

type DataProps = {
  location: Location;
};

const Navibar: React.FC<PageProps<DataProps>> = ({ location }) => {
  naviLinks.forEach((link) => (link.active = "no"));
  const currentLink = naviLinks.find((link) => link.url === location?.pathname);
  if (currentLink) currentLink.active = "yes";
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
