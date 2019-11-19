import React, { Component } from "react";
import SearchResult from "./searchResult";
import NoneResult from "./noneResult";

import Row from "react-bootstrap/Row";

import "../styles/styles.css";

class SearchResults extends Component {
  state = {};

  render() {
    return (
      <div
        className={this.props.showResults ? "" : "hidden"}
        style={{
          height: "100%",
          top: "1px",
          borderRadius: "5px",
          overflowY: "hidden",
          overflowX: "hidden",
          padding: "15px"
        }}
      >
        {this.props.searchResults.length > 0 ? (
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
      </div>
      // <div
      //   className={this.props.showResults ? "" : "hidden"}
      //   style={{
      //     position: "relative",
      //     overflowX: "hidden",
      //     padding: "5px"
      //   }}
      // >
      //   {this.props.searchResults.length > 0 ? (
      //     this.props.showResults &&
      //     this.props.searchResults.map(deviceInfo => (
      //       <Row key={deviceInfo.id}>
      //         <SearchResult
      //           key={deviceInfo.wikiLink}
      //           deviceInfo={deviceInfo}
      //           onAddDevice={this.props.onAddDevice}
      //         />
      //       </Row>
      //     ))
      //   ) : this.props.showResults ? (
      //     <Row>
      //       <NoneResult />
      //     </Row>
      //   ) : null}
      // </div>
    );
  }
}

export default SearchResults;
