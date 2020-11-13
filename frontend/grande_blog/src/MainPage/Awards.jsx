
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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

export default function Awards() {
  const classes = useStyles();
//   const { post } = props;
    const title = 'Awards and Acknowledgements';
    const awards = [
      {
        id: '1',
        event:'RBVH',
        awardName: 'Spot Awards',
        awardYear: '2017',
        description: 'The quarterly award for excellent communication skills and good ownership on both FMEA and BCP projects.',
      },
      {
        id: '2',
        event:'BizHacks',
        awardName: 'BizHacks',
        awardYear: '2019',
        description: '4th Place winner with team OhYeahWeDo with Sentinel Health',
      },
      {
        id: '3',
        event:'BCHacks',
        awardName: 'BCHacks',
        awardYear: '2020',
        description: 'Team with the best idea with YouCare - https://devpost.com/software/youcare-jgosc0',
      },
    ];

  return (
       <CardActionArea component="a" href="#">
         <Card className={classes.card}>
           <div className={classes.cardDetails}>
             <CardContent>
               <Typography component="h4" variant="h6">
                 <i>{title}</i>
               </Typography>
               {awards.map( value =>(
                //  console.log(value.awardName);
                 <Typography variant="body1">
                  <b>{value.awardName} ({value.event}, {value.awardYear}): </b>
                  {value.description}
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
