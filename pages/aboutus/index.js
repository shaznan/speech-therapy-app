import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
// import Navbar from "../../components/Layout/Navbar/Navbar";
import AboutUsMain from "../../components/Aboutus_Components/AboutUsMain.component";
import CultureAndFounder from "../../components/Aboutus_Components/CultureAndFounder.component";
import useHydrateState from "../../components/useHydrateState";

export default function AboutUs() {
  const [hydrateWithLocalStorage] = useHydrateState();
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <AboutUsMain />
      <CultureAndFounder />
    </Fragment>
  );
}
