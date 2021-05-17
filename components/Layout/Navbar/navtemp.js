<div>
  <Grid item xs={1.5}>
    <li className={router.pathname == "/" ? classes.active : ""}>
      <Link href="/">Home</Link>
    </li>
  </Grid>

  <Grid item xs={1.5}>
    <li className={router.pathname == "/About-us" ? classes.active : ""}>
      <Link href="/about-us">About Us</Link>
    </li>
  </Grid>
  <Grid item xs={1.5}>
    <li className={router.pathname == "/Articles" ? classes.active : ""}>
      <Link href="/articles">Articles</Link>
    </li>
  </Grid>
  <Grid item xs={1.5}>
    <li className={router.pathname == "/book-store" ? classes.active : ""}>
      <Link href="/book-store">Bookstore</Link>
    </li>
  </Grid>
  <Grid item xs={1.5}>
    <li className={router.pathname == "/contact-us" ? classes.active : ""}>
      <Link href="/contact-us">Contact us</Link>
    </li>
  </Grid>
</div>;
