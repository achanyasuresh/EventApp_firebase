import React , {useEffect,useState} from 'react';
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
    console.log("inside effect")
    fireDb.child('Events').on('value', snapshot => {
        console.log("inside db")

        if(snapshot.val() !== null) {  
            console.log("inside iffff") 
            setData({ ...snapshot.val() })
            console.log("value", snapshot.val())
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
        <Paper>
        <Grid>
          <img  src={background} height="300" width="1848"></img>
        </Grid>
        </Paper>
       
          <Typography variant='h2' align='center'>
            All your event make you happy
          </Typography>

      <Grid container spacing={3}> 
      <Grid item xs={3}>
        {Object.keys(data).map((id, index) => {
          
        })}
      <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        
        image={images}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions><img></img>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
    </Grid>
    </Grid>

    <table>
      <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>
                            No
                        </th>
                        <th style={{textAlign: "center"}}>
                            Name
                        </th>
                        <th style={{textAlign: "center"}}>
                            Location
                        </th>
                        <th style={{textAlign: "center"}}>
                            Conatct
                        </th>
                        <th style={{textAlign: "center"}}>
                            Conatct Person
                        </th>
                        <th style={{textAlign: "center"}}>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index ) => {
                        return (
                            <tr key={id}>
                                <th scope="row">{index+1}</th>
                                <td>{data[id].eventname}</td>
                                <td>{data[id].eventlocation}</td>
                                <td>{data[id].contactnumber}</td>
                                <td>{data[id].contactperson}</td>
                                <td>{data[id].email}</td>
                                {/* <td>{data[id].contact}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
      </table>
    </Paper>

    </div>
  )
}

export default Dashboard
