import React, { Component } from "react";
//import Device from "./device";
import SearchResult from "./searchResult";
import NoneResult from "./noneResult";

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
          backgroundColor: "#f7f9fa",
          margin: "2"
        }}
      >
        <div
          className="container"
          style={{
            width: "96%",
            overflowY: "auto",
            overflowX: "hidden",
            borderWidth: "5px",
            borderColor: "#000000"
          }}
        >
          {this.props.showResults && this.props.searchResults.length > 0 ? (
            this.props.showResults &&
            this.props.searchResults.map(deviceInfo => (
              <Row key={deviceInfo.id}>
                <SearchResult
                  key={deviceInfo.wikiLink}
                  deviceInfo={deviceInfo}
                  onAddDevice={this.props.onAddDevice}
                />
              </Row>
            ))
          ) : this.props.showResults ? (
            <Row>
              <NoneResult />
            </Row>
          ) : null}
          {/* {this.props.showResults &&
            this.props.searchResults.map(deviceInfo => (
              <Row key={deviceInfo.id} style={{ maxHeight: "70px" }}>
                <SearchResult
                  key={deviceInfo.wikiLink}
                  deviceInfo={deviceInfo}
                  onAddDevice={this.props.onAddDevice}
                />
              </Row>
            ))} */}
        </div>
      </div>
    );
  }
}

export default SearchResults;
