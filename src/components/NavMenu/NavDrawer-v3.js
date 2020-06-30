import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";
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
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";

import avatar from "../../assets/images/avatar.png";
import Footer from "../../components/Footer/Footer";

//-----------------------------------------

//CSS Styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto,",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    listPath: "/contacts",
  },
];
//or Navbar
const Navbar = () => {
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
          // <ListItem button key={key} component={Link} to={lsItem.listPath}>
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
      <IconButton onClick={toggleSlider("right", true)}>
        <ArrowBack style={{ color: "tomato" }} />
      </IconButton>

      <MobilRightMenuSlider
        anchor="right"
        open={state.right}
        onClick={
          toggleSlider("right", false) //this is not working when you click on a item the sidebar doesn't close
        }
      >
        {sideList("right")}
        <Footer />
      </MobilRightMenuSlider>
    </>
  );
};

export default Navbar;
