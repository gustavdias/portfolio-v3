// import React from 'react';
import Home from "./components/Home/Home";
import Navbar from "./components/NavMenu/Navbar";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    textToCopy: "gustav.almd@gmail.com",
  };
  render() {
    return (
      <div>
        <Navbar email={this.state.textToCopy} />
        <Home/>
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
