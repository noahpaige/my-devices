import React, { Component } from "react";
import "./App.css";
//import NavBar from "./components/navbar";
import OwnedDevices from "./components/ownedDevices";
import SearchResultList from "./components/searchResultList";
import SearchBar from "./components/searchBar";

class App extends Component {
  state = {
    myDevices: [
      {
        id: 0,
        name: "iPhone XR 1",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.thumbnail",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 1,
        name: "Xbox One 1",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 2,
        name: "iPhone XR 2",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 3,
        name: "Xbox One 2",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 4,
        name: "iPhone XR 3",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 5,
        name: "Xbox One 3",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 6,
        name: "iPhone XR 4",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 7,
        name: "Xbox One 4",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 8,
        name: "iPhone XR 5",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 9,
        name: "Xbox One 5",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 10,
        name: "iPhone XR 6",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 11,
        name: "Xbox One 6",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      }
    ],
    searchResults: []
  };

  handleDelete = deviceId => {
    const myDevices = this.state.myDevices.filter(d => d.id !== deviceId);
    this.setState({ myDevices });
  };

  handleSearchStringChange = searchStr => {
    if (searchStr === "") {
      searchResults = [];
    } else {
      searchResults = getFilteredResults(searchStr);
    }
    this.setState({ searchResults });
  };

  render() {
    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          className="align-middle m-2"
          style={{ width: "50vw", height: "50vh" }}
        >
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;

function getFilteredResults(searchStr) {}
