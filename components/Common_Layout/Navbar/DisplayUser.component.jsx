import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayUserDropdown from "./DisplayUserDropdown.conponent";

function DisplayUser() {
  const nickName = useSelector((state) => state.login_signup.nickName);
  const [avatar, setAvatar] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <Fragment>
      <Grid item lg={3} xs={4}>
        <div onClick={toggleDropdown} className={classes.userdetailcontainer}>
          <div className={classes.avatarcontainer}>
            <img src={avatar} className={classes.avatar} />
          </div>
          <span className={classes.userdetail}>
            Welcome, <span className={classes.placeholder}>{nickName}</span>{" "}
          </span>
          <DisplayUserDropdown
            avatar={avatar}
            nickName={nickName}
            showDropdown={showDropdown}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </Grid>
    </Fragment>
  );
}

export default DisplayUser;
