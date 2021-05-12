import React, { memo } from "react";

import Buttons from "../../components/Buttons";
import SupportCard from "../../components/SupportCard";

import styles from "./style";

const ServicesAndSupport = memo(() => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="wrapper">
        <div className="header">Services And Support</div>
      </div>
    </>
  );
});

export default ServicesAndSupport;
