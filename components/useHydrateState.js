import React from "react";
import { userSlice_Actions } from "../store/userSlice";
import { useDispatch } from "react-redux";

function useHydrateState() {
  const dispatch = useDispatch();

  const hydrateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("state")) {
      dispatch(
        userSlice_Actions.setState(JSON.parse(localStorage.getItem("state"))),
      );
      dispatch(userSlice_Actions.setIsLoggedIn(true));
    }
  };
  return [hydrateWithLocalStorage];
}

export default useHydrateState;
