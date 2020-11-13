
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
    // flex: 1,
  },
  cardMedia: {
    float:'right'
  },
  textSpace: {
    paddingTop: '2px',
  },

});

function renderProject(projects){
  let render = projects.map(prj => (
    <li>
      <b>{prj.name}: </b>
      {prj.overview}<br/>
      {renderPrjDuties(prj.duties)}
    </li>
  ));
  return render;
}

function renderPrjDuties (duties){
  let render = duties.map(duty => (
    <ul style={{margin: '1.5px'}}><li>{duty}</li></ul>
  ));
  return render;
}

export default function Experience() {
  const classes = useStyles();
//   const { post } = props;
  const title = 'Experience';
  const experiences = [
    {
      id: '1',
      role: 'Software Engineer',
      company: 'Robert Bosch Vietnam (RBVH)',
      location: 'Ho Chi Minh City, Vietnam',
      duration: 'Feb 2016 - Aug 2018',
      website: 'https://www.bosch.com/',
      overview: 'RBVH is a division of Robert Bosch GmbH, which is well-known for its global brand in automotive and household appliances.',
      projects: [
        {
          name: 'BCP - Belt Calculation Program',
          overview: 'This application significantly enhances the process of working on the Matlab calculations of transmission components, by helping end-users reduce time and effort in the process of the calculations',
          duties: [
            'Researched a variety of different technologies (Primefaces, RDL) and applications (Matlab Server, Matlab Modules), maintained, developed and integrated new modules for projects.',
            'Tested and studied to improve the performance of the backend server with issues related to timeout error.',
            'Approached a full lifecycle of web development in Agile',
            'Maintained on-going web apps and update new features'
          ]
        },
        {
          name: 'CQMetrics WebApp',
          overview: 'The application provides an aid to the management that collects and processes a large amount of records from the IBM Engineering Lifecycle Management applications to generate associated reports.',
          duties: [
            'Transformed data imports from different sources, including Excel, APIs from Jira or IBM task management tools, and generated associated reports',
            'Studied a full lifecycle of software development by gaining knowledge from IBM Engineering Lifecycle Management',
          ]
        },
        {
          name: 'BIP - Bosch Integrate Platform',
          overview: 'This SaaS product represents a central organization that connects the task tracking tools such as JIRA and IBM Engineering Lifecycle Management applications; automates data migration, imports, exports and schedules for report generating.',
          duties: [
            'Collaborated within a team of 4 to 6 members to build a microservices web application named BIP',
          ]
        },
        {
          name: 'FMEA Document Management',
          overview: 'The project\'s objective is to help users manage their documents in the sense of FMEA approach.',
          duties: [
            'Successfully applied appropriate design patterns to refactor the legacy code',
            'Developed a strong relationship with customers and end-users for resolving requests and applications updates',
          ]
        },
      ],      
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
                 experiences.map(
                    exp =>(
                      <Typography variant="subtitle1">
                        <b>{exp.role} | {exp.company} | {exp.location} | {exp.duration}</b> <br/>
                        {exp.overview} <br/>  
                        <a href={exp.website}>{exp.website}</a> <br/>
                        {renderProject(exp.projects)}
                      </Typography>
                    )
                 )
               }
               
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
