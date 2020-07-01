// import React from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/NavMenu/Navbar";
import Contact from "./components/Contact/Contact";
import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class App extends Component {
  state = {
    textToCopy: "gustav.almd@gmail.com",
  };
  render() {
    return (
      <div>
        <Navbar email={this.state.textToCopy} />

          <Route path="/" exact component={Home} />
          {/* <Route path="/resume" component={Resume} /> */}
          {/* <Route path="/portfolio" component={Portfolio} /> */}
          <Route path="/contact" component={Contact} />

        {/* <Home /> */}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
// <Home/>
//     </div>
//   );
// }

// export default App;
