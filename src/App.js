import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import CrafteeMap from "./CrafteeMap.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <CrafteeMap />
        </div>
      </div>
    );
  }
}

export default App;
