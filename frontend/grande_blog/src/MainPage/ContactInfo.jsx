
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
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    textAlign:'left',
    justifyContent:'space-between',
  },
  cardArea :{
    marginBottom: theme.spacing(4),
  },
  cardDetails: {
    flex: 1,
    // display:'table-cell',
    // verticalAlign: 'middle',
  },
  cardText:{
    position:'absolute',
    marginTop: 'auto',
    marginBottom:'auto',
    marginLeft: '10px'
  },
  cardMedia: {
    // width: 160,
    float:'right'
  },

}));

export default function ContactInfo() {
  const classes = useStyles();
//   const { post } = props;
    const title = 'Minh-Hong Le';
    const info = {
        address:'Burnaby, BC, Canada',
        tel:'+1 778 316 7914',
        email: 'hong.le@live.com',
        linkedIn: 'https://www.linkedin.com/in/mhongle/',
        gitHub: 'https://github.com/mhong01'
    }

  return (
       <CardActionArea component="a" href="#" className={classes.cardArea}>
         <Card className={classes.card}>
           <div className={classes.cardDetails}>
             <CardContent>
               <Typography component="h2" variant="h5">
                 {title}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                 {info.address}
               </Typography>
               <Typography variant="body1">
                 <PhoneIphoneIcon/> <span className={classes.cardText}>{info.tel}</span>
               </Typography>
               <Typography variant="body1">
                <EmailIcon/> <span className={classes.cardText}>{info.email}</span>
               </Typography>
               <Typography variant="body1">
                <LinkedInIcon/> <a href={info.linkedIn} className={classes.cardText}>{info.linkedIn}</a>
               </Typography>
               <Typography variant="body1">
                <GitHubIcon/> <a href={info.gitHub} className={classes.cardText}>{info.gitHub}</a>
               </Typography>
             </CardContent>
           </div>
           <Hidden xsDown>
             <CardMedia className={classes.cardMedia} 
            // image={post.image} title={post.imageTitle} 
            />
          </Hidden>
        </Card>
      </CardActionArea>
  );
}

// FeaturedPost.propTypes = {
//   post: PropTypes.object,
// };
