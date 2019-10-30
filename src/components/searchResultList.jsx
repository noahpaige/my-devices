import React, { Component } from "react";
//import Device from "./device";
import SearchResult from "./searchResult";

import Row from "react-bootstrap/Row";

class SearchResultList extends Component {
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
                    onAddDevice={this.props.onAddDevice}
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
