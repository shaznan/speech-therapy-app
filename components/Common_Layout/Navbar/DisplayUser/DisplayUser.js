import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import classes from "../Navbar.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayUserDropdown from "./Dropdown.conponent";
import DisplayUser_WelcomTxt from "./WelcomTxt.component";

function DisplayUser() {
  const nickName = useSelector((state) => state.user.entities[0].nickName);
  const [avatar, setAvatar] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  //Get user Avatar
  useEffect(() => {
    axios
      .get(
        `https://avatars.dicebear.com/api/initials/${nickName}.svg?backgroundColors=cyan`
        // `https://avatars.dicebear.com/api/bottts/${nickName}.svg?textureChance=100`
      )
      .then((res) => {
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
          <DisplayUser_WelcomTxt avatar={avatar} nickName={nickName} />
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