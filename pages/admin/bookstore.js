import React, { useEffect } from "react";
import { Fragment } from "react";
import useVerifyUserAdmin from "../../components/AdminDashboard/useVerifyUserAdmin";
import Navigation from "../../components/AdminDashboard/Navigation.component";
import { useSelector } from "react-redux";

function BookStore() {
  const [isAdmin, verifyAdmin] = useVerifyUserAdmin();
  const userRole = useSelector((state) => state.user.entities[0].userRole);

  useEffect(() => {
    verifyAdmin();
  }, [userRole]);

  return <Fragment>{isAdmin && <Navigation />}</Fragment>;
}

export default BookStore;
