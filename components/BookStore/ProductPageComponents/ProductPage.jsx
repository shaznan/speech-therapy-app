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
        <Grid container spacing={2} className={classes.productpage_cont}>
          <div className={classes.backbtn_cont}>
            <BackBtn />
          </div>
          <Grid item md={5} sm={12} className={classes.img_cont}>
            <div className={classes.img_subcontainer}>
              <img src={props.images[0].src} className={classes.img} />
            </div>
          </Grid>
          <Grid item md={7} sm={12} className={classes.product_desc_cont}>
            <Grid container spacing={0} className={classes.product_desc}>
              <Grid item md={12} className={classes.title}>
                <Typography variant="h6">{props.title}</Typography>
              </Grid>
              <Grid item md={12} className={classes.description_txt}>
                {props.description}
              </Grid>
              <Grid item md={12} className={classes.price_cont}>
                <ItemPrice props={props} />
              </Grid>
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
