import React, { Fragment, useEffect } from "react";
import Navbar from "../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import HomepageImage from "../assets/images/homepage_image.png";
import { useStyles } from "../styles/global.styles";
import HomepageText from "../components/homepage_Components/HomepageText";
import Button from "../components/Common_Layout/Button/Button";
import BannerImage from "../components/Common_Layout/Banner/BannerImage";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useHydrateState from "../components/useHydrateState";
import AdminToolbar from "../components/Common_Layout/AdminToolbar/AdminToolbar";
import LoadSpinner from "../components/Common_Layout/loadspinner/loadSpinner";

export default function Home() {
  const classes = useStyles();
  const router = useRouter();
  const redirectHandler = () => {
    router.push("/performtest", null, { shallow: true });
  };
  const [hydrateWithLocalStorage] = useHydrateState();
  const loading = useSelector((state) => state.user.loading);

  //avoid loosing user state on page refresh
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <Fragment>
      <AdminToolbar />
      <Navbar />
      <LoadSpinner loading={loading} />
      <div>
        <Grid container spacing={0} className={classes.maincontainer}>
          <Grid item lg={6} xs={12} className={classes.textcontainer}>
            <div>
              <HomepageText />
              <Button
                type="primary"
                text="Perform Test"
                onClickHandler={redirectHandler}
              />
            </div>
          </Grid>
          <Grid item lg={6} xs={12} className={classes.imagecontainer}>
            <div>
              <BannerImage url={HomepageImage} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}
