import React from "react";
import { PageProps } from "gatsby";

type DataProps = {
  children?: React.ReactNode;
};

const styles = {
  maxWidth: "1310px",
  padding: "0px 50px",
};

export const Container: React.FC<PageProps<DataProps>> = ({ children }) => {
  return (
    <div className="container" style={styles}>
      {children}
    </div>
  );
};
