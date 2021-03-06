import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import images from "../../assets/images/b.jpg";
import background from "../../assets/images/a.jpeg";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import fireDb from "../../firebase";
import ViewEvent from '../View/View';
import Header from '../../components/Header/Header';
import { Token } from '@mui/icons-material';
import Head from '../../components/Header/head';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {

    fireDb.child('Events').on('value', snapshot => {


      if (snapshot.val() !== null) {

        setData({ ...snapshot.val() })

      }
      else {
        setData({})
      }
    })
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Paper>
        
        <Grid>
        <Head />
          <Grid>  
              <img src={background} height="250px" width="100%"></img>
            </Grid>
          <Typography variant='h2' align='center'>
            All your event make you happy
          </Typography>
          <ViewEvent />


        </Grid>


      </Paper>

    </div>
  )
}

export default Dashboard
