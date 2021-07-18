import React, { useEffect } from "react";
import { useStyles } from "../components/homepage_Components/homepage_styles";
import useHydrateState from "../components/useHydrateState";
import WelcomeMsg_Container from "../components/homepage_Components/WelcomeMsg_Container.component";
import Articles_container from "../components/homepage_Components/Articles_Container/Articles_container.component";

export default function Home() {
  const classes = useStyles();
  const [hydrateWithLocalStorage] = useHydrateState();

  //avoid loosing user state on page refresh
  useEffect(() => {
    hydrateWithLocalStorage();
  }, []);

  return (
    <div>
      <WelcomeMsg_Container />
      <Articles_container />
    </div>
  );
}
