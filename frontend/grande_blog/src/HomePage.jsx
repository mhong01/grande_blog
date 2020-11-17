import React from 'react';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { getUsers } from './Utils/HttpUtils';
import { GrandeRouter } from './Utils/GrandeRouter';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  background: {
      height: '100%',
  },
  content:{
    // backgroundColor: '#fafafa',
    maxWidth:'1536px',
    margin: 'auto',
    maxHeight:'100%',
  }
}));

export default function HomePage(){
    const classes = useStyles();
    const sections = [
        { title: 'Feed', url: '/' },
        { title: 'Personal', url: '/personal' },
        { title: 'Discover', url: '/about' },
      ];
    // const [user, setUser] = useState(null);
    const title = "Grande";
    return (
        <Router>
        <Switch>

        {/* <div className={classes.background}> */}
            <div className={classes.content}>
                <Header sections={sections} title= {title}/>
                <GrandeRouter/>
            </div>
        {/* </div> */}
        </Switch>
        </Router>
    );
}
