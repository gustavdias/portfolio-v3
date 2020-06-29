import React, { useState } from "react";
import "./NavMenu.css";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";
import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import avatar from "../../assets/images/avatar2.png";
import Typed from "react-typed";
import MailIcon from "@material-ui/icons/Mail";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

//CSS Styles
const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
          display: 'flex',
        },
      },
    grow: {
        flexGrow: 1,
      },
    root: {
        display: "flex",
      },
  menuSliderContainer: {
    width: 240,
    background: "#007a8c",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto,",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#dbb700",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];
//or Navbar
const Navbar = (props) => {
  //Hide side bar

  const [state, setState] = useState({
    right: false,
  });
  //toggleSliderHandler?
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  //Hide side bar
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar src={avatar} className={classes.avatar} alt="Gustavo Dias" />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav" className={classes.root}>
        <AppBar position="sticky" style={{ background: "#353236" }}>
          <Toolbar>
            <Box className="toolbar__toggle-button">
              {/* Burger Menu */}
              <IconButton
                color="inherit"
                onClick={toggleSlider("right", true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* Gustavo Dias */}
            <Typography
              variant="h6"
              style={{ color: "#dbb700", fontFamily: "Montserrat" }}
            >
              <Typed
                strings={["Gustavo Dias"]}
                showCursor={false}
                typeSpeed={40}
              />{" "}
            </Typography>

            <Box style={{display: "flex"}}className="toolbar_navigation-items">
              {/* Resume */}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="primary"
              >
                <AssignmentIndIcon style={{ color: "#19a9bc" }} />{" "}
              </IconButton>

              {/* email */}
              <IconButton aria-label="show 4 new mails" color="inherit">
                <MailIcon />
              </IconButton>

              <Typography
                style={{ color: "#19a9bc", fontFamily: "Montserrat" }}
              >
                <Typed
                  strings={["gustav.almd@gmail.com"]}
                  startDelay={1000}
                  showCursor={false}
                  typeSpeed={80}
                />
              </Typography>

              {/* Social Media */}
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <IconButton>
                  <LinkedInIcon style={{ color: "#19a9bc" }} />
                </IconButton>

                <IconButton>
                  <GitHubIcon style={{ color: "#dbb700" }} />
                </IconButton>
              </div>
            </Box>

            <MobilRightMenuSlider
              anchor="right"
              open={state.right}
              onClick={
                toggleSlider("right", false) //this is not working when you click on a item the sidebar doesn't close
              }
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
