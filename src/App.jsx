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
    previousResults: []
  };

  componentDidMount() {
    //const saveData = localStorage.getItem("myDevices");
    const saveData = JSON.parse(localStorage.getItem("myDevices"));

    console.log("myDevices = \n\n |" + saveData + "|");
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
    } else this.setState({ searchResults: [] });
  };

  handleAddDevice = deviceData => {
    const newDeviceState = this.state.myDevices.concat(deviceData);
    this.setState({ previousResults: [] });
    this.setState({ searchResults: [] });
    this.setState({ myDevices: newDeviceState });
    localStorage.setItem("myDevices", JSON.stringify(newDeviceState));
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
        <div
          className="m-2"
          style={{
            width: "50vw",
            height: "50vh",
            overflow: "hidden",
            margin: "0 auto"
          }}
        >
          <OwnedDevices
            onDelete={this.handleDelete}
            ownedDevices={this.state.myDevices}
          />
        </div>
        <div
          className="align-middle m-2"
          style={{ width: "50vw", height: "38px" }}
        >
          <SearchBar
            onAddDevice={this.handleAddDevice}
            onChange={this.handleSearchStringChange}
            searchResults={this.state.searchResults}
          />
        </div>
      </div>
    );
  }
}

export default App;

//================================ helper functions ================================

function getFilteredResults(searchStr) {
  let requestString = "https://www.ifixit.com/api/2.0/search/";
  requestString +=
    removeSpaces(searchStr) + "?c-doctype_namespace=product&doctype=topic";

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
