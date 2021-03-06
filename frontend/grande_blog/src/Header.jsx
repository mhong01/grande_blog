import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { useState, useEffect } from 'react';

// import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

const Header = connect(mapStateToProps)(HeaderComponent);


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function HeaderComponent(props) {
  const classes = useStyles();
  const { sections, title } = props;
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <React.Fragment>
      {/* {props.isUserLoggedIn} */}
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          // align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Link to='/signup' className={classes.toolbarLink}>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
        </Link>
        <Link to='/signin'>
        <Button variant="outlined" size="small">
          Sign In
        </Button>
        </Link>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
            to={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header;
