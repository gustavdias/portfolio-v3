import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import {
  // ArrowBack,
  AssignmentInd,
  Home,
  // Apps,
  ContactMail,
  // GetApp,
} from "@material-ui/icons";
// import Typed from "react-typed";
import {Typography, Avatar} from "@material-ui/core";
import FooterMobile from "../Footer/FooterMobile";
import FileCopy from "@material-ui/icons/FileCopy";
import { Link } from "react-router-dom";
import avatar from '../../assets/images/android-chrome-512x512.png'


const useStyles = makeStyles((theme) => ({
  avatar: {
    display: 'block',
    margin: theme.spacing(1),
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  copyButton: {
    color: "#eaded0",
  },
  button: {
    color: "#dbb700",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  listItem: {
    // background: "#353236",
    // color: "#19a9bc",
  },
  list: {
    background: "#353236",
    color: "#dbb700",
    width: 250,
    height: "100%",
  },
  fullList: {
    width: "auto",
  },
}));

export default function NavDrawer(props) {
  //NavDrawer opens
  // let drawerClasses = "side-drawer";

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

<Avatar src={avatar} className={classes.avatar} alt="Gustavo Dias" />
      <List>
        <ListItem>
          <ListItemIcon>
            <Typography
              style={{ color: "#eaded0", fontFamily: "Montserrat" }}
              onClick={() => {
                navigator.clipboard.writeText(props.email.email);
              }}
            >
              gustav.almd@gmail.com
            </Typography>{" "}
          </ListItemIcon>
        </ListItem>
      </List>


      <List>
        {["Copy email"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.copyButton}>
              {index % 2 === 0 ? (
                <FileCopy
                  onClick={() => {
                    navigator.clipboard.writeText(props.email.email);
                  }}
                />
              ) : (
                <ContactMail />
              )}
            </ListItemIcon>
            <ListItemText
             className={classes.copyButton}
              primary={text}
              onClick={() => {
                navigator.clipboard.writeText(props.email.email);
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider/>

      <List className={classes.listItem}>
        {["Home"].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to="/"
            variant="outlined"
            color="secondary"
          >
            <ListItemIcon className={classes.button}>
              {index % 2 === 0 ? <Home /> : <ContactMail />}
            </ListItemIcon>
            <ListItemText primary={text} />
            {/* <ListItemPath /> */}
          </ListItem>
        ))}
      </List>
      <Divider />

      <List className={classes.listItem}>
        {["Contact"].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to="/contact"
            variant="outlined"
            color="secondary"
          >
            <ListItemIcon className={classes.button}>
              <ContactMail />
            </ListItemIcon>
            <ListItemText primary={text} />
            {/* <ListItemPath /> */}
          </ListItem>
        ))}
      </List>




      <Divider />

      <List>
        {["Resume"].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
          >
            <ListItemIcon className={classes.button}>
              {index % 2 === 0 ? <AssignmentInd /> : <ContactMail />}
            </ListItemIcon>
            <ListItemText primary={text} />
            {/* <ListItemPath /> */}
          </ListItem>
        ))}
      </List>







      <Divider />
      {/* <List>
        {["Open Resume", "Download Resume"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.button}>
              {index % 2 === 0 ? <AssignmentInd        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/gustavdias" /> : <GetApp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <Divider />
    </div>
  );
  // console.log("props in NavDrawer" + props);
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            color="inherit"
          >
            {list(anchor)}
            <FooterMobile />
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
