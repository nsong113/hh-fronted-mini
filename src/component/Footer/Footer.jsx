import React from "react";
import * as ST from "./style";

const Footer = () => {
  return (
    <ST.FooterBoxDiv>
      <ST.FooterContainerDiv>
        <ST.FooterInfoDiv>
          <p className="FooterInfoDetailP">Desert Shop</p>
          <p className="FooterInfoDetailP">FAQ</p>
          <p className="FooterInfoDetailP">CONTACT</p>
          <p className="FooterInfoDetailP">서울 강남구 테헤란로44길 8 12층</p>
        </ST.FooterInfoDiv>
        <br />
        <br />
        <ST.FooterSNSContainerDiv>
          <ST.FooterSNSDiv></ST.FooterSNSDiv>
          <ST.FooterSNSDiv></ST.FooterSNSDiv>
          <ST.FooterSNSDiv></ST.FooterSNSDiv>
          <ST.FooterSNSDiv></ST.FooterSNSDiv>
          <ST.FooterSNSDiv></ST.FooterSNSDiv>
        </ST.FooterSNSContainerDiv>
      </ST.FooterContainerDiv>
    </ST.FooterBoxDiv>
  );
};

export default Footer;
