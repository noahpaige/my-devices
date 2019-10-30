import React, { Component } from "react";
//import Device from "./device";
import SearchResult from "./searchResult";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

class SearchResultList extends Component {
  state = {};

  handleDelete = deviceId => {
    const items = this.state.items.filter(d => d.id !== deviceId);
    this.setState({ items });
  };

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
          {this.props.showResults
            ? this.props.searchResults.map(deviceInfo => (
                <Row>
                  <SearchResult
                    key={deviceInfo.wikiLink}
                    deviceInfo={deviceInfo}
                  />
                </Row>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default SearchResultList;
