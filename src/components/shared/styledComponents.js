import styled from "styled-components";

export const BottomSectionArrow = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: -10px;
  background: inherit;
  transform: translateX(-50%) rotate(45deg);
  left: 50%;
  // right: 0;
  // margin-left: auto;
  // margin-right: auto;
  z-index: 10;
`;

export const SectionHeading = styled.h2`
  text-align: center;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: "Montserrat", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  text-transform: uppercase;
`;

export const SectionDesc = styled.p`
  text-align: center;
  opacity: 0.6;
`;
