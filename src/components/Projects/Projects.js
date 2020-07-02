import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Grid, CardActionArea } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CodeIcon from "@material-ui/icons/Code";
import VisibilityIcon from "@material-ui/icons/Visibility";

//card buttons style

const useStyles = makeStyles((theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 4px",
    transform: "scale(1.2)",
  },
  button: {
    margin: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: '#eaded0',
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: 1300,
    background: '#5f5b60'
  },
  card: {
    // maxWidth: 345,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    // background: '#dbb700'
    textAlign: "justify",
  },


  cardYellow: {
    background: "#dbb700",
  },
  cardBlue: {
    background: "#19a9bc",
  },

  cardBlack: {
    background: "#0f0a10",
  },
  cardWhite: {
    background: "#eaded0",
  },
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <React.Fragment>
      {/* <Box component="div" style={{ background: "#5f5b60", height: "100vh" }} */}
      <main style={{ background: "#5f5b60"}}>
       
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}

          <Grid container spacing={4}>
            {/* {cards.map((card) => ( */}
            {/* Place your cards */}

            {/* Card 1 Yellow */}
            <Grid item key={0} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://dev-burger-builder-939a7.web.app/"
                >


                  <CardContent
                    className={`${classes.cardContent} ${classes.cardYellow}`}
                  >
                    <Typography
                      color="inherit"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      React {bull} Node.js {bull} Express {bull} Firebase Realtime Database
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Burger Builder - Menu
                  </Typography>
                  <Typography>
                  A <strong>React</strong> Burger Builder App with <strong>database</strong> and <strong>deployment</strong> on <strong>Firebase</strong>. You can build your own burger, with many pieces of salad, bacon, cheese, and meat, in <strong>any screen size</strong>.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/dev-burger-builder"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://dev-burger-builder-939a7.web.app/"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Card 2 Blue */}
            <Grid item key={2} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://extracker.netlify.app/"
                >
       

                  <CardContent
                    className={`${classes.cardContent} ${classes.cardBlue}`}
                  >
                    <Typography
                      color="inherit"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      MongoDB {bull} Express {bull} React {bull} Node.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    eT-exerciseTracker App
                  </Typography>
                  <Typography >
                    
                      <strong>MERN</strong> Stack - A <strong>React</strong>{" "}
                      Exercise Tracker App with <strong>MongoDB</strong>,{" "}
                      <strong>Express</strong>, and <strong>Node.js</strong> on
                      the backend.
                      <br />
                      Extra dependencies: <strong>mongoose</strong>,{" "}
                      <strong>axios</strong>, <strong>react-router-dom</strong>,{" "}
                      <strong>bootstrap</strong>,{" "}
                      <strong>react-datepicker</strong>, <strong>cors</strong>.
                    
                      <strong>eT</strong> - your personal exercise tracker,{" "}
                      <strong>so good</strong>,{" "}
                      <strong>it is out of this planet</strong>! Give it a try!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/et-frontend"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://extracker.netlify.app/"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Card 3 Black*/}
            <Grid item key={3} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://react-justdoit.netlify.app"
                >


                  <CardContent
                    className={`${classes.cardContent} ${classes.cardBlack}`}
                  >
                    <Typography
                      color="secondary"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      MongoDB {bull} Express {bull} React {bull} Node.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    React Todo List JSONPlaceholder
                  </Typography>
                  <Typography>
                    A React Todo List with JSONPlaceholder Fake online REST that
                    acts as a backend server that feeds data to the app.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/react-todo-axios"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react-justdoit.netlify.app"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            {/* Card 4 Blue */}
            <Grid item key={4} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ric-rac-roe.netlify.app"
                >
  
                  <CardContent
                    className={`${classes.cardContent} ${classes.cardBlue}`}
                  >
                    <Typography
                      color="inherit"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      React
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    React tic-tac-toe game with time travel
                  </Typography>
                  <Typography>

                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/react-tic-tac-toe"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ric-rac-roe.netlify.app"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid>


            {/* Card 5 White*/}
            <Grid item key={5} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/gustavdias/post-reserve"
                >


                  <CardContent
                    className={`${classes.cardContent} ${classes.cardWhite}`}
                  >
                    <Typography
                      color="inherit"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      JavaScript {bull} Node.js {bull} Express {bull} MongoDB {bull} Passport.js
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Post & Reserve App
                  </Typography>
                  <Typography>
                  <strong>Sign Up</strong>, <strong>Login</strong>, <strong>Create</strong> and <strong>Delete</strong> your own <strong>Posts</strong> and <strong>Comments</strong>. A Project using <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Node.js</strong>, <strong>Express</strong>, mongoose with <strong>MongoDB</strong>, <strong>authentication</strong>, and authorization with <strong>Passport.js</strong>.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/post-reserve"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://post-reserve.herokuapp.com/"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Card 6 Yellow */}
            <Grid item key={6} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vanillajs-todo-list.netlify.app"
                >


                  <CardContent
                    className={`${classes.cardContent} ${classes.cardYellow}`}
                  >
                    <Typography
                      color="inherit"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      JavaScript {bull} HTML {bull} CSS 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Vanilla JS Todo List
                  </Typography>
                  <Typography>
                  A charming JavaScript Todo List, design with CSS.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/gustavdias/vanilla-todo-list"
                    startIcon={<CodeIcon />}
                  >
                    CODE
                  </Button>

                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.button}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vanillajs-todo-list.netlify.app"
                    startIcon={<VisibilityIcon />}
                  >
                    DEMO
                  </Button>
                </CardActions>
              </Card>
            </Grid>

  
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
