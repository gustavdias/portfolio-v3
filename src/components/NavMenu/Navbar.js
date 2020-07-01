import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NavDrawer from "./NavDrawer";
import Typed from "react-typed";
import GitHubIcon from "@material-ui/icons/GitHub";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import FileCopy from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({


  buttonR: {
    marginRight: theme.spacing(1),
  },
  buttonL: {
    marginRight: theme.spacing(12),
  },
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  // responsiveness!!!!!!!!!!
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  console.log(props);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.sectionMobile}>
            {/* --------------------------------- Repassing Props --------------------------------- */}

            <NavDrawer email={props} />
          </div>


          {/* --------------------------------- Gustavo Dias --------------------------------- */}
          <Typography
            variant="h5"
            style={{ color: "#dbb700", fontFamily: "Montserrat" }}
          >
            <Typed
              strings={["GUSTAVO DIAS"]}
              showCursor={false}
              typeSpeed={40}
            />{" "}
          </Typography>

          {/* --------------------------------- Search Bars --------------------------------- */}
          <div className={classes.sectionDesktop}>


            {/* Resume */}
            <Tooltip title="Open Resume">
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/11kDg6kOCOLxBYZUq6uK-8E2zeV5BXe1d/view?usp=sharing"
              >
                <AssignmentInd />
              </IconButton>
            </Tooltip>
            
          </div>

          {/* This part is for what you want to see only on desktop view */}
          <div className={classes.sectionDesktop}>
            

            {/* email */}
            <Tooltip title="Copy email">
              <IconButton
                aria-label="show 4 new mails"
                color="secondary"
                onClick={() => {
                  navigator.clipboard.writeText(props.email);
                }}
              >
                <FileCopy />
              </IconButton>
            </Tooltip>
          </div>

          <div className={classes.sectionDesktop}>
            {/* --------------------------------- Email --------------------------------- */}
            <Typography style={{ color: "#19a9bc", fontFamily: "Montserrat" }}>
              <Typed
                strings={["gustav.almd@gmail.com"]}
                startDelay={1000}
                showCursor={false}
                typeSpeed={80}
              />
            </Typography>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              className={classes.buttonR}
              component={Link}
              to="/"
              variant="outlined"
              color="secondary"
            >
              HOME
            </Button>
            <Button
              className={classes.buttonL}
              component={Link}
              to="/contact"
              variant="outlined"
              color="secondary"
            >
              CONTACT
            </Button>
          </div>
          {/* This part is for what you want to see only on desktop view */}
          <div className={classes.sectionDesktop}>
            
<Tooltip title="Visit my GitHub">

            <IconButton
            
              aria-label="show 17 new notifications"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gustavdias"
            >

                <GitHubIcon color="inherit" />
            </IconButton>
            </Tooltip>

          </div>

         
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default NavBar;
