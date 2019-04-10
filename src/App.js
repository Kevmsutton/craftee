import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import CrafteeMap from "./CrafteeMap.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <CrafteeMap />
      </React.Fragment>
    );
  }
}

export default App;
