
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import useWindowDimensions from '../ResizeWindow';
import LetterMainCard from './LetterMainCard';
import DisplayPhoto from '../MainPage/DisplayPhoto';

const useStyles = makeStyles((theme) =>({
  card: {
    paddingTop: '15px',
    margin:'10px',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    float:'right'
  },
  cardGrid: {
    padding: theme.spacing(1),
    flexShrink: 0,
    maxWidth:'90%',
    margin:'auto'
  },
  avatar:{
    margin:'auto',
    paddingBottom:theme.spacing(2),
  },
  cardGridSmall:{
    padding: theme.spacing(3),
    flexShrink: 1,
  },
  cardGridSmallContent:{
    margin:'auto',
    // width: '80%',
    paddingBottom:theme.spacing(3),
  },
  textAlign: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },

}));

export default function Personal() {
  const classes = useStyles();
  const {height, width} = useWindowDimensions();

  return (
    width > 1000 
      ? <Grid container spacing={4} className={classes.cardGrid}>
            <Grid item xs={3}>
              <DisplayPhoto/>
            </Grid>
            <Grid item xs={9} spacing= {2}>
              <LetterMainCard/>
            </Grid> 
        </Grid>
        :
        <div>
            <div className={classes.avatar}><DisplayPhoto/></div>
            <Grid container spacing={0} className={classes.cardGridSmall}>
            <div className={classes.cardGridSmallContent}><LetterMainCard/></div>
            </Grid>
        </div>
  );
}