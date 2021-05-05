import React from "react";
import styled from "styled-components";
import { PageProps } from "gatsby";

type DataProps = {
  children?: React.ReactNode;
};

const StyledDiv = styled.div`
  @media (min-width: 576px) {
    max-width: 1310px;
    padding: 0px 50px;
  }
`;

export const Container: React.FC<PageProps<DataProps>> = ({ children }) => {
  return <StyledDiv className="container">{children}</StyledDiv>;
};
