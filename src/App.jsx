import React, { Component } from "react";
import "./App.css";
//import NavBar from "./components/navbar";
import Devices from "./components/devices";

class App extends Component {
  state = {
    ownedDevices: []
  };

  render() {
    return (
      <React.Fragment>
        <Devices />
      </React.Fragment>
    );
  }
}

export default App;
