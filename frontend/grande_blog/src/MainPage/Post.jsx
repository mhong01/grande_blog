import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

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

export default function Post(props) {
  const classes = useStyles();
  const { post } = props;
    // const post = {
    //     image : '',
    //     title : '',
    //     description : '',
    //     linkText : '#'
    // }

  return (
    <CardActionArea component="a" href="#" className={classes.cardArea}>
         <Card className={classes.card}>
           <div className={classes.cardDetails}>
             <CardContent>
               <Typography component="h2" variant="h5">
                 {post.title}
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                 {post.description}
               </Typography>
               <Typography variant="body1">
                <span className={classes.cardText}>{post.linkText}</span>
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

Post.propTypes = {
  post: PropTypes.object,
};