import React from 'react';
import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';

import MainPage from './MainPage/MainPage';
import Personal from './PostContent/Personal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { getUsers } from './Utils/HttpUtils';
import SignUp from './Signup/SignUp';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  background: {
      backgroundColor: '#fafafa'
  },
  content:{
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
    const title = "Grande!";

    // useEffect(() => {
    //     async function getUser(){
    //       const response = await getUsers();
    //       console.log(response);
    //       setUser(response.data[0]);
    //     }
    //     getUser();
    // }, []);
    // console.log(user);
    return (
        <Router>
        <Switch>

        <div className={classes.background}>
            <div className={classes.content}>
                <Header sections={sections} title= {title}/>
                {/* {user != null  */}
                {/* <Route exact={true} path="/" render={
                    (props) => <Resume {...props} userId={user.id}/>
                  } /> */}
                <Route exact={true} path="/" component={MainPage}/>
                <Route path="/personal" component={Personal}/>
                <Route path="/signup" component={SignUp}/>
            </div>
        </div>
        </Switch>
        </Router>
    );
}
