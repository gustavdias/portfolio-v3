import React, { Component } from "react";
import Navbar from './components/Navbar';
import NavDrawer from './components/NavDrawer';


export default class Nav extends Component {
  //info is the sidebar visible or not?
  state = {
    sideDrawerOpen: false,
  };

  //react to a click on the toolbar
  drawerToggleClickHandler = () => {
    //prevState is passed into the function by React
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <BackDrop click={this.backdropClickHandler} />
    // }
    return (
      <div style={{ height: "100%" }}>
        <NavBar
          drawerClickHandler={this.drawerToggleClickHandler}/>
                  <SideDrawer show={this.state.sideDrawerOpen} />
                  {/* {backdrop} */}

        {/* for you to do a transition effect with the sidebar, it should be on/true by default, else you can use css effect */}
        {/* the sidebar will always be present and you will choose if it will be shown or not */}
      </div>
    );
  }
}
