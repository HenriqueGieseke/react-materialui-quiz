import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import React from 'react';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.navContainer}>
        <div className={classes.logoContainer}>
          <ContactSupportIcon />
          <Typography className={classes.navTitle} variant="h1">
            Nerd Quiz
          </Typography>
        </div>
        <Link className={classes.link} to="#">
          Quiz Results
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
