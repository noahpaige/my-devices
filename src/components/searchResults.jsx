import React, { Component } from "react";
//import Device from "./device";
import SearchResult from "./searchResult";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class SearchResults extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#dddddd",
          margin: "2"
        }}
      >
        <div
          className="container"
          style={{
            width: "96%",
            overflowY: "auto",
            overflowX: "hidden"
          }}
        >
          {this.props.showResults &&
            this.props.searchResults.map(deviceInfo => (
              <Row key={deviceInfo.id}>
                <SearchResult
                  key={deviceInfo.wikiLink}
                  deviceInfo={deviceInfo}
                  onAddDevice={this.props.onAddDevice}
                />
              </Row>
            ))}
        </div>
      </div>
    );
  }
}

export default SearchResults;
