import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./Productpage_styles";
import Typography from "@material-ui/core/Typography";
import Add_RemoveItemsToCart from "./Add_RemoveItemsToCart.component";
import AddToCart_ViewCart_Btn from "./AddToCart_ViewCart_Btn.component";
import BackBtn from "./BackBtn.component";
import ItemPrice from "./ItemPrice.component";

function ProductPage({ props }) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.productpage_maincont}>
        <Grid container className={classes.productpage_cont}>
          <BackBtn />
          <Grid item md={5} className={classes.img_cont}>
            <div>
              <img src={props.images[0].src} />
            </div>
          </Grid>
          <Grid item md={7} className={classes.product_desc_cont}>
            <Grid container spacing={0} className={classes.product_desc}>
              <Grid item md={12} className={classes.title}>
                <Typography variant="h5">{props.title}</Typography>
              </Grid>
              <Grid item md={12} className={classes.description_txt}>
                {props.description}
              </Grid>
              <ItemPrice props={props} />
            </Grid>
            <Add_RemoveItemsToCart />
            <AddToCart_ViewCart_Btn />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default ProductPage;
