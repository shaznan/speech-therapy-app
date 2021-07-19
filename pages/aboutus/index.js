import React, { Fragment, useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
// import Navbar from "../../components/Layout/Navbar/Navbar";
import AboutUsMain from "../../components/Aboutus_Components/AboutUsMain.component";
import CultureAndFounder from "../../components/Aboutus_Components/CultureAndFounder.component";
import useHydrateState from "../../components/useHydrateState";
import AdminToolbar from "../../components/Common_Layout/AdminToolbar/AdminToolbar";
import Footer from "../../components/Common_Layout/Footer/Footer.component";

export default function AboutUs() {
  const [hydrateWithLocalStorage] = useHydrateState();
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <Fragment>
      <AdminToolbar />
      <Navbar />
      <AboutUsMain />
      <CultureAndFounder />
      <Footer />
    </Fragment>
  );
}
