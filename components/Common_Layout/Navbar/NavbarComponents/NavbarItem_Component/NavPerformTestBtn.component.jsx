import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "../../Navbar.module.css";

//isHomePageActive, router, classes, link

function NavPerformTestBtn({ isHomePageActive }) {
  const router = useRouter();
  return (
    <Fragment>
      {!isHomePageActive ? ( //don't show PT button on homepage
        <li
          className={
            router.pathname === "/" + "performtest"
              ? classes.active
              : classes.custombutton
          }
        >
          <Link href="/performtest">Perform Test</Link>
        </li>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default NavPerformTestBtn;
