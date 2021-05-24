import React, { Fragment } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
// import Navbar from "../../components/Layout/Navbar/Navbar";
import AboutUsMain from "../../components/Aboutus_Components/AboutUsMain.component";
import CultureAndFounder from "../../components/Aboutus_Components/CultureAndFounder.component";

export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
      <AboutUsMain />
      <CultureAndFounder />
    </Fragment>
  );
}
