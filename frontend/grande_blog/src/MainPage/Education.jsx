
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

const useStyles = makeStyles({
  card: {
    display: 'flex',
    textAlign:'left',
    justifyContent:'space-between',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    float:'right'
  },

});

export default function Education() {
  const classes = useStyles();
//   const { post } = props;
    const title = 'Education';
    const educations = [
      {
        schoolName: 'Douglas College',
        location: 'New Westminster, BC',
        program: 'Post Baccalaureate Diploma in Computer and Information Systems',
        duration: '2018 - 2020',
      },
      {
        schoolName: 'RMIT University',
        location: 'Vietnam',
        program: 'Bachelor of Information Technology (Application Programming)',
        duration: '2013 - 2016',
      }
    ];
  return (
       <CardActionArea component="a" href="#">
         <Card className={classes.card}>
           <div className={classes.cardDetails}>
             <CardContent>
               <Typography component="h4" variant="h6">
                  <i>{title}</i>
               </Typography>
               {
                 educations.map(edu => (
                    <Typography variant="body1">
                      <b>{edu.schoolName}, {edu.location}</b> - 
                       {' ' + edu.program} <span style={{float:'right'}}>{edu.duration}</span>
                    </Typography>
                 ))}
               
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
