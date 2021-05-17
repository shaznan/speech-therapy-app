import React, { Fragment } from "react";
import logoImage from "./images/logo.png";
import classes from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <Fragment>
      <div className={classes.navbar}>
        <img className={classes.navlogo} src={logoImage} />
        <ul className={classes.navitems}>
          <li className={router.pathname == "/" ? classes.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname == "/about-us" ? classes.active : ""}>
            <Link href="/about-us">About Us</Link>
          </li>
          <li className={router.pathname == "/articles" ? classes.active : ""}>
            <Link href="/articles">Articles</Link>
          </li>
          <li
            className={router.pathname == "/book-store" ? classes.active : ""}
          >
            <Link href="/book-store">Bookstore</Link>
          </li>
          <li
            className={router.pathname == "/contact-us" ? classes.active : ""}
          >
            <Link href="/contact-us">Contact us</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Navbar;

// import Image from "next/image";

{
  /* <Image
          src={logoImage}
          alt="Picture of the author"
          width={616}
          height={232}
        /> */
}
