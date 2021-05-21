import React, { Fragment } from "react";
import Navbar from "../../components/Layout/Navbar/Navbar";
import AboutUsMain from "../../components/Layout/Aboutus_Component/AboutUsMain.component";
import CultureAndFounder from "../../components/Layout/Aboutus_Component/CultureAndFounder.component";

export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
      <AboutUsMain />
      <CultureAndFounder />
    </Fragment>
  );
}
