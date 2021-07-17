import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function WIthAdminAuth(props) {
  const userRole = useSelector((state) => state.user.entities[0].userRole);
  return <Fragment>{userRole === "Admin" && props.children}</Fragment>;
}

export default WIthAdminAuth;
