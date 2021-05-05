import React, { memo } from "react";
import { ServicesAndSupportWrapper, Header } from "../style/ServicesAndSupport";
import Buttons from "../components/Buttons";
import SupportCard from "../components/SupportCard";

const ServicesAndSupport = memo(() => {
  return (
    <ServicesAndSupportWrapper>
      <Header>Services And Support</Header>
    </ServicesAndSupportWrapper>
  );
});

export default ServicesAndSupport;
