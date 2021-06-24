import React from "react";
import { Fragment } from "react";
import { useStyles } from "../Dashboard_Styles";
import acheivementImg from "../../../../../assets/images/acheivement.png";
import { useSelector } from "react-redux";

function ColumnOne({ subheadingOne, data }) {
  const classes = useStyles();
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  return (
    <Fragment>
      <div className={classes.subheading}>{subheadingOne}</div>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            className={`${
              item.name === nickName
                ? classes.highlightitem
                : classes.scoreitems
            } ${classes.scoreitems_one}`}
          >
            {item.name && i < 4 ? (
              <img className={classes.acheivement_img} src={acheivementImg} />
            ) : (
              ""
            )}
            {item.name ? item.name : item.Attempt_no}
          </div>
        );
      })}
    </Fragment>
  );
}

export default ColumnOne;
