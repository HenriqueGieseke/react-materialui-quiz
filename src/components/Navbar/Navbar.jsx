import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.navContainer}>
        <Typography className={classes.navTitle} variant="h1">
          Wa Project Quiz
        </Typography>
        <Link className={classes.link} to="#">
          Quiz Reports
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
