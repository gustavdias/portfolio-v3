import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
import NavDrawer from "./NavDrawer";
import Typed from "react-typed";
import GitHubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import FileCopy from "@material-ui/icons/FileCopy";

const useStyles = makeStyles((theme) => ({
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

  // const email = this.props.textToCopy;

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
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}

          {/* --------------------------------- Gustavo Dias --------------------------------- */}
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

          {/* --------------------------------- Search Bars --------------------------------- */}
          <div className={classes.sectionDesktop}>
            {/* <div className={classes.search}> */}
            {/* <div className={classes.searchIcon}> */}
            {/* <SearchIcon /> */}

{/* Resume */}
<IconButton
                aria-label="show 4 new mails"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/11kDg6kOCOLxBYZUq6uK-8E2zeV5BXe1d/view?usp=sharing"
              >
                <AssignmentInd />
              </IconButton>

            {/* email */}
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <FileCopy
                onClick={() => {
                  navigator.clipboard.writeText(props.email);
                }}
              />
            </IconButton> */}
            {/* </div> */}
          </div>

          {/* This part is for what you want to see only on desktop view */}
          <div className={classes.sectionDesktop}>
            {/* <div className={classes.search}> */}
              {/* <div className={classes.searchIcon}> */}
              {/* <SearchIcon /> */}

              {/* Resume */}
              {/* <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/gustavdias"
              >
                <AssignmentInd />
              </IconButton> */}

              {/* email */}
              <IconButton aria-label="show 4 new mails" color="secondary">
                <FileCopy onClick={() => {
                  navigator.clipboard.writeText(props.email)}}/>
              </IconButton>
            {/* </div> */}
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
          
          {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            /> */}
          {/* </div> */}
          <div className={classes.grow} />

          {/* This part is for what you want to see only on desktop view */}
          <div className={classes.sectionDesktop}>
            {/* <div className={classes.search}> */}
            {/* <IconButton aria-label="show 4 new mails" color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gustavdias">
                <Badge>
                  <LinkedInIcon />
                </Badge>
              </IconButton> */}
            <IconButton
              aria-label="show 17 new notifications"
              color="inherit"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gustavdias"
            >
              {/* <Badge badgeContent={17} color="secondary"> */}

              <Badge>
                <GitHubIcon color="inherit" />
              </Badge>
            </IconButton>
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
            {/* </div> */}
          </div>

          {/* This part is for what you want to see on mobile view */}
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default NavBar;
