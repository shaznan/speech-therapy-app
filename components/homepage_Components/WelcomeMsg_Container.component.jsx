import React from "react";
import { Fragment } from "react";
import { useStyles } from "../homepage_Components/homepage_styles";
import AdminToolbar from "../Common_Layout/AdminToolbar/AdminToolbar";
import LoadSpinner from "../../components/Common_Layout/loadspinner/loadSpinner";
import HomepageText from "./HomepageText";
import Button from "../../components/Common_Layout/Button/Button";
import BannerImage from "../../components/Common_Layout/Banner/BannerImage";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Navbar from "../../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import HomepageImage from "../../assets/images/homepage_image.png";
import Slide from "react-reveal/Slide";

function WelcomeMsg_Container() {
  const loading = useSelector((state) => state.user.loading);
  const redirectHandler = () => {
    router.push("/performtest", null, { shallow: true });
  };
  const router = useRouter();
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.container}>
        <AdminToolbar />
        <Navbar />
        <LoadSpinner loading={loading} />
        <div className={classes.coverImage}>
          <Grid container spacing={0} className={classes.maincontainer}>
            <Grid item lg={6} xs={12} className={classes.textcontainer}>
              <div>
                <HomepageText />
                <Slide bottom duration={1800}>
                  <Button
                    type="primary"
                    text="Perform Test"
                    onClickHandler={redirectHandler}
                  />
                </Slide>
              </div>
            </Grid>
            <Grid item lg={6} xs={12} className={classes.imagecontainer}>
              <BannerImage url={HomepageImage} />
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export default WelcomeMsg_Container;
