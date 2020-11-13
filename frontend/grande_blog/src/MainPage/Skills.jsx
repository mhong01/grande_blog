
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
import DisplayPhoto from './DisplayPhoto';

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
    width: 160,
    float:'right'
  },

});

function concatString (strArr){
  let s = '';
  for (var i = 0; i < strArr.length; i++){
    if (s != ''){
      s += ', ';
    }
    s += strArr[i];
  }
  return s;
}

export default function Skills() {
    const classes = useStyles();
    const title = 'Highlighted Skills';
    const skills = [
      {
        id: '1',
        skillName: 'Programming Languages',
        description: ['Java', 'JavaScript', 'Python', 'C#', 'PHP']
      },
      {
        id: '2',
        skillName: 'Web Development',
        description: ['ReactJS', 'Angular', 'SpringBoot', 'Flask', 'Django',
                      'Redux', 'RESTful API', 'Tomcat', 'Wildfly', 'Maven',
                      'npm']
      },
      {
        id: '3',
        skillName: 'Mobile Development',
        description: ['Android', 'React Native']
      },
      {
        id: '4',
        skillName: 'Databases',
        description: ['MySQL', 'Oracle', 'SQLServer', 'MongoDB','PostgreSQL']
      }, 
      {
        id: '5',
        skillName: 'Project Management',
        description: ['Agile/Scrum']
      }, 
      {
        id: '6',
        skillName: 'Others',
        description: ['Azure', 'Git', 'SVN', 'XML', 'JSON', 'LDAP', 'Docx4j']
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
               {skills.map(skill =>(
                <Typography variant="subtitle1">
                  <li>
                    <b>{skill.skillName}: </b>
                    {concatString(skill.description)}
                  </li>
                </Typography>
               ))}
               
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
