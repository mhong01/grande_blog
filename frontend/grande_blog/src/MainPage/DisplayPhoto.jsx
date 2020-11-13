import React, {Component, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useWindowDimension from '../ResizeWindow';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    medium: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    cardText:{
        position:'absolute',
        marginLeft: '10px'
      },
    shrink:{
        maxWidth:'100%',
    },
  }));

export default function DisplayPhoto(){
    const classes = useStyles();
    const { width, height} = useWindowDimension();
    const imgURL = 'https://scontent.fcxh3-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/123001207_2402268429897970_9108994820798525792_n.jpg?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=tgUuC6vyfwAAX9aiFUY&_nc_ht=scontent.fcxh3-1.fna&tp=6&oh=7cc781e643a9fb934fe546cbde1283a0&oe=5FCA2881';
    const summary = 'Experienced Software Engineer who quickly adapts to change and closely collaborates with software architects and seniors to develop software solutions. Aims for company products\' success, assists team members in need, and be a fantastic self-learner.'
    const info = {
        address:'Burnaby, BC, Canada',
        tel:'+1 778 316 7914',
        email: 'hong.le@live.com',
        linkedIn: 'https://www.linkedin.com/in/mhongle/',
        gitHub: 'https://github.com/mhong01'
    }
    return (
        // <div>
    width > 1000
        ?
        <div><Avatar alt="MHL" src={imgURL} style={{margin:'auto'}} className={classes.large}></Avatar>
            <Typography variant="subtitle1" color="textSecondary">
                {info.address}
            </Typography>
            <div style={{marginRight: '5px',textAlign:'left'}}>
            {/* <Typography variant="body1">
                <PhoneIphoneIcon/> <span className={classes.cardText}>{info.tel}</span>
            </Typography> */}
            <Typography variant="body1">
            <EmailIcon/> <span className={classes.cardText}>{info.email}</span>
            </Typography>
            <Typography variant="body1">
            <LinkedInIcon/> <a href={info.linkedIn} className={classes.cardText}>{info.linkedIn}</a>
            </Typography>
            <Typography variant="body1">
            <GitHubIcon/> <a href={info.gitHub} className={classes.cardText}>{info.gitHub}</a>
            </Typography>
            </div>
        </div>
        :
        <div><Avatar alt="MHL" src={imgURL} style={{margin:'auto'}} className={classes.medium}></Avatar>
            <Typography variant="subtitle1" color="textSecondary">
                {info.address}
            </Typography>
            <Typography variant="body1">
                <PhoneIphoneIcon/>
                <EmailIcon/> 
                <LinkedInIcon/>
                <GitHubIcon/>
            </Typography>
        </div>
    );
}