import React, { Fragment, useEffect } from "react";
import Navbar from "../components/Common_Layout/Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import HomepageImage from "../assets/images/homepage_image.png";
import { useStyles } from "../styles/global.styles";
import HomepageText from "../components/homepage_Components/HomepageText";
import Button from "../components/Common_Layout/Button/Button";
import BannerImage from "../components/Common_Layout/Banner/BannerImage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import useHydrateState from "../components/useHydrateState";

export default function Home() {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const redirectHandler = () => {
    router.push("/performtest", null, { shallow: true });
  };
  const [hydrateWithLocalStorage] = useHydrateState();

  //avoid loosing user state on page refresh
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <Fragment>
      <Navbar />
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
