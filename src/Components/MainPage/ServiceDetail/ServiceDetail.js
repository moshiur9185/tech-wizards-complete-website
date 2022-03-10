import React, { useContext } from "react";
import './ServiceDetails.css';
import { useHistory } from "react-router";
import { UserContext } from "../../../App";
import { auth } from "../../Login/Login/LoginManager";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[500],
  },
}));
//material ui end

const ServiceDetail = (props) => {
  const { _id, name, price, description, img } = props.service
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();

  const handleExplore = ((_id, name, price) => {
    if (loggedInUser) {
      history.push("/book");
      const { displayName, email } = loggedInUser;
      const cardBook = {
        name: displayName,
        email,
        serviceName: name,
        price: price,
        serviceId: _id
      }
      fetch('https://infinite-island-97956.herokuapp.com/addBook', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cardBook)
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => {
          console.log(err);
        })
    }
    else {
      history.push('/login')
    }
  })


  //for card material ui
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <section class="col-md-4 mb-4">
      {/* <div className="card card-service ">
        <div class="card-body py-3 px-4">
          <img style={{ height: '50%', width: '100%', borderRadius: "5%" }} src={`data:image/png;base64,${props.service.image.img}`} alt="" />
          <h4 style={{ color: "green" }}>{name}</h4>
          <p class="card-text">{description}</p>
          <h5 style={{ color: "green" }}>$ {price}</h5>
          <button onClick={() => auth.currentUser?.email ? handleExplore(_id, name, price) : history.push('/login')} className="btn btn-outline-success">Explore Now</button>
        </div>
      </div> */}
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={`data:image/png;base64,${props.service.image.img}`} />
        <CardContent>
          <Typography  style={{ color: "green" }} variant="body" component="h5">
          {name}
          </Typography>
          <h5 >$ {price}</h5>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <button onClick={() => auth.currentUser?.email ? handleExplore(_id, name, price) : history.push('/login')} className="btn btn-outline-success">Explore Now</button>
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
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Details :</Typography>
            <Typography paragraph>{description}</Typography>
            </CardContent>
        </Collapse>
      </Card>
      {/* </animated.div> */}
    </section>
  );
};

export default ServiceDetail;
