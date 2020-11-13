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
  
export default function LetterMainCard(){
    const classes = useStyles();
    const title = 'Cover Letter';
    return(
        <CardActionArea component="a" href="#">
         <Card className={classes.card}>
           <div className={classes.cardDetails}>
             <CardContent>
               <Typography component="h4" variant="h6">
                  <i>{title}</i>
               </Typography>
                    <Typography variant="body1">
                        My name is Hong and I am a Software Engineer who recently achieved a Bachelor degree of Information Technology and Post Baccalaureate Diploma in Computer and Information Systems in Data Analytics. As a result-oriented and an effective communication individual, who has been familiar with all phases of SDLC and using web technologies such as Java, Python or React (JS and Native), I believe I can be the best fit to the position of Web Applications Developer. {"\n\n"}
                        <br/>
                        Having 3 years continuous hands-on industrial experience to develop software and strong knowledge of the development cycles, I had a chance to participate in different teams with divergent domain applications under Scrum methodology. Mostly, I develop and maintain web projects written in server-side languages (Java, Python or PHP) and front-end Javascript frameworks (React, Primefaces and Angular). I also have experience in building applications using Android and React Native, with other technologies such as Docker and Rest API. Additionally, I have concrete understanding of SQL, NoSQL (Oracle Database, SQL Server, MySQL or MongoDB) and OOP. In addition to the software development mentioned, I am familiar with the research and analysis process that has been done while taking my diploma. {'\n\n'}
                        <br/>
                        Throughout work and study period in the recent years, my performance was demonstrated by following awards and prizes: 
                        {'\n'}<li>Spot Award for good ownership on 2 projects and excellent communication skills in 2017, Bosch Vietnam</li>
                        {'\n'}<li>The 4th winning team for Sentinel Health in BizHacks 2019, </li>
                        {'\n'}<li>UBC Vancouver Team with the best idea for YouCare in BCHacks 2020, UBC Okanagan </li>
                        <br/>
                        {'\n\n'}Please consider the enclosed resume to know more about my professionalism, background and skills. I look forward to having an opportunity to discuss my application in further process. Please contact me at my email address hong.le@live.com or +1778-316-7914 to arrange a discussion at your most convenience.
                        <br/>
                        {'\n\n'} Best regards,
                        {'\n'}Hong

                    </Typography>
             </CardContent>
           </div>
           <Hidden xsDown>
             <CardMedia className={classes.cardMedia} 
            />
          </Hidden>
        </Card>
      </CardActionArea>
      );
}