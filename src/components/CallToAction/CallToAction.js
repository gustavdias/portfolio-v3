import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
    backgroundColor: "#eaded0",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  return (
    <div>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Portfolio
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Welcome! I am a Full Stack Software Developer. You can explore my collection of projects below. And don&apos;t forget to check my cv and contact.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/11kDg6kOCOLxBYZUq6uK-8E2zeV5BXe1d/view?usp=sharing"
                >
                  Open resume
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact"
                  color="secondary"
                >
                  Contact Me
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallToAction;
