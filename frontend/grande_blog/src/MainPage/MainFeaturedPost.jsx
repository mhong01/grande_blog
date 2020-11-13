import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 345,
  },
  large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
//   const { post } = props;
    const url = 'https://source.unsplash.com/random';
    const post = {
        image : url,
        title : '',
        description : 'Experienced Software Engineer who quickly adapts to change and closely collaborates with software architects and seniors to develop software solutions. Aims for company products\' success, assists team members in need, and be a fantastic self-learner.',
        linkText : '#'
    }

  return (
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={post.image}
                title="MHL"/>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" >
                {post.description}
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};