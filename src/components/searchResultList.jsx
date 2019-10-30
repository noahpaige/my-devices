import React, { Component } from "react";
//import Device from "./device";
import SearchResult from "./searchResult";

import Row from "react-bootstrap/Row";

class SearchResultList extends Component {
  state = {};

  handleDelete = deviceId => {
    const items = this.state.items.filter(d => d.id !== deviceId);
    this.setState({ items });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >
        {this.props.showResults
          ? this.props.searchResults.map(deviceInfo => (
              <Row
              //style={{ height: "12rem" }}
              >
                <SearchResult key={deviceInfo.id} deviceInfo={deviceInfo} />
              </Row>
            ))
          : null}
        {/* {this.props.searchResults.map(deviceInfo => (
          <Row
          //style={{ height: "12rem" }}
          >
            <SearchResult key={deviceInfo.id} deviceInfo={deviceInfo} />
          </Row>
        ))} */}
      </div>
    );
  }
}

export default SearchResultList;
