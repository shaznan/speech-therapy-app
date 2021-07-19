import React from "react";
import { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Footer_Styles";
import { Container, Typography } from "@material-ui/core";
import FooterBody from "./FooterBody.component";
import GitHubIcon from "@material-ui/icons/GitHub";
// import { Link } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";
import Link from "next/link";

function Footer() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={0} className={classes.container}>
        <Container spacing={2} maxWidth="lg" className={classes.content_cont}>
          <FooterBody />
          <Grid container className={classes.btnCont}>
            <Grid item md={1} sm={6}>
              <Link href="https://github.com/shaznan">
                <Button>
                  <GitHubIcon className={classes.icon} />
                </Button>
              </Link>
            </Grid>
            <Grid item md={1} sm={6}>
              <Link href="https://www.linkedin.com/in/shaznan-fairoze-40a71715b">
                <Button>
                  <LinkedInIcon className={classes.icon} />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Fragment>
  );
}

export default Footer;
