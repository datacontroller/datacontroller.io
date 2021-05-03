import React from "react";
import { PageProps } from "gatsby";

import styled from "styled-components";

import { Hero, HeroHeading, HeroDesc } from "./styles";
import { BottomSectionArrow } from "../shared/styledComponents";

type DataProps = {
  title: string;
  desc: string;
};

const HeroSection: React.FC<PageProps<DataProps>> = ({ title, desc }) => {
  return (
    <Hero>
      <div className="container">
        <HeroHeading>{title}</HeroHeading>
        <HeroDesc>{desc}</HeroDesc>
      </div>
      <BottomSectionArrow />
    </Hero>
  );
};

export default HeroSection;
