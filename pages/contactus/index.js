import React, { useEffect } from "react";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import useHydrateState from "../../components/useHydrateState";
import AdminToolbar from "../../components/Common_Layout/AdminToolbar/AdminToolbar";
import ContactUsForm from "../../components/ContactUs/ContactUsForm";
import Footer from "../../components/Common_Layout/Footer/Footer.component";
import { Grid } from "@material-ui/core";
import { useStyles } from "../../components/ContactUs/ContactUsForm_styles";
import Location from "../../components/ContactUs/Location.component";

function ContactUsPage() {
  const classes = useStyles();
  const [hydrateWithLocalStorage] = useHydrateState();
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <div>
      <Navbar />
      <AdminToolbar />
      <Grid container spacing={0} className={classes.mainContainer}>
        <Grid item lg={6} sm={12}>
          <ContactUsForm />
        </Grid>
        <Grid item lg={6} sm={12}>
          <Location />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default ContactUsPage;
