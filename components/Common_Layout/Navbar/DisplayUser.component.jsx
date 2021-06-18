import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function DisplayUser() {
  const nickName = useSelector((state) => state.login_signup.nickName);
  const [avatar, setAvatar] = useState(null);

  //Get user Avatar
  useEffect(() => {
    axios
      .get(
        `https://avatars.dicebear.com/api/initials/${"nigga"}.svg?backgroundColors=cyan`
        // `https://avatars.dicebear.com/api/bottts/${nickName}.svg?textureChance=100`
      )
      .then((res) => {
        console.log(res);
        setAvatar(res.config.url);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        <div className={classes.userdetailcontainer}>
          {/* <div className={classes.avatarcontainer}>
            <img src={avatar} className={classes.avatar} />
          </div>
          <span className={classes.userdetail}>
            Welcome, <span className={classes.placeholder}>{nickName}</span>{" "}
          </span> */}
          <div className={classes.dropdowncontainer}>
            <img src={avatar} className={classes.dropdownavatar} />
            <div className={classes.dropdownplaceholder}>{nickName}</div>
            <div className={classes.logouttext}>Logout</div>
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}

export default DisplayUser;
