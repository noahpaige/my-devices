import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/searchBar";
import OwnedDevices from "./components/ownedDevices";

class App extends Component {
  state = {
    myDevices: [
      // {
      //   id: 0,
      //   name: "iPhone XR",
      //   image:
      //     "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.thumbnail",
      //   wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      // },
      // {
      //   id: 1,
      //   name: "Xbox One",
      //   image:
      //     "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
      //   wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      // }
    ],
    searchResults: [],
    previousResults: [],
    showResults: false
  };

  componentDidMount() {
    const saveData = JSON.parse(localStorage.getItem("myDevices"));
    saveData != null
      ? this.setState({ myDevices: saveData })
      : this.setState({ myDevices: [] });
  }

  handleDelete = deviceId => {
    const myDevices = this.state.myDevices.filter(d => d.id !== deviceId);
    localStorage.setItem("myDevices", JSON.stringify(myDevices));
    this.setState({ myDevices });
  };

  handleSearchStringChange = searchStr => {
    if (searchStr !== "") {
      getFilteredResults(searchStr).then(response => {
        console.log("response: " + response);
        if (response.length > 0) {
          this.setState({ previousResults: this.state.searchResults });
          this.setState({ searchResults: response });
        } else this.setState({ searchResults: this.state.previousResults });
      });
      this.setState({ showResults: true });
    } else {
      this.setState({ searchResults: [] });
      this.setState({ showResults: false });
    }
  };

  handleAddDevice = deviceData => {
    if (!includesDevice(deviceData, this.state.myDevices)) {
      const newDeviceState = this.state.myDevices.concat(deviceData);
      this.setState({ myDevices: newDeviceState });
      localStorage.setItem("myDevices", JSON.stringify(newDeviceState));
    }
    this.setState({ showResults: false });
    this.setState({ previousResults: [] });
    this.setState({ searchResults: [] });
  };

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden"
        }}
      >
        <div className="center-horizontally">
          <h1
            className="font-weight-light text-center"
            style={{ color: " #0068d0", marginTop: "16px" }}
          >
            My Devices
          </h1>
          <div
            className="m-2 shadow"
            style={{
              display: "inline-block",
              width: "340px",
              height: "50vh",
              overflow: "hidden",
              margin: "0 auto",
              borderRadius: "4px"
            }}
          >
            <OwnedDevices
              onDelete={this.handleDelete}
              ownedDevices={this.state.myDevices}
            />
          </div>
          <div
            style={{
              height: "38px",
              marginTop: "-8px"
            }}
          >
            <SearchBar
              onAddDevice={this.handleAddDevice}
              onChange={this.handleSearchStringChange}
              searchResults={this.state.searchResults}
              showResults={this.state.showResults}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//================================ helper functions ================================

function getFilteredResults(searchStr) {
  // //https://www.ifixit.com/api/2.0/suggest/QUERYSTRING?doctypes=device
  let requestString = "https://www.ifixit.com/api/2.0/suggest/";
  requestString += removeSpaces(searchStr) + "?doctypes=device";
  let searchResults = fetch(requestString)
    .then(results => {
      return results.json();
    })
    .then(function(data) {
      return filterAndFormatResults(data.results);
    })
    .catch(function(error) {
      console.log(error);
      return [];
    });
  return searchResults;
}

function removeSpaces(searchStr) {
  return searchStr.replace(/\s/g, "%20");
}
function filterAndFormatResults(searchData) {
  let output = [];
  for (let i = 0; i < searchData.length; i++) {
    const element = searchData[i];
    if (element.dataType === "wiki" && element.namespace === "CATEGORY") {
      output.push({
        id: element.wikiid,
        name: element.title,
        image: element.image.medium,
        wikiLink: element.url
      });
    }
  }
  return output;
}

function includesDevice(deviceData, myDevices) {
  for (let i = 0; i < myDevices.length; i++) {
    const device = myDevices[i];
    if (device.id === deviceData.id) return true;
  }
  return false;
}
