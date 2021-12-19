import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();

  const location = useLocation().pathname;

  return (
    <AppBar position="relative">
      <Toolbar className={classes.navContainer}>
        <div className={classes.logoContainer}>
          <ContactSupportIcon />
          <Typography className={classes.navTitle} variant="h1">
            Nerd Quiz
          </Typography>
        </div>
        {location === '/' ? (
          <Link
            component={RouterLink}
            className={classes.link}
            to="/quizReports"
          >
            Quiz Results
          </Link>
        ) : (
          <Link component={RouterLink} className={classes.link} to="/">
            Home
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
