import React, { Component, createRef } from "react";

import FormControl from "react-bootstrap/FormControl";
import SearchResults from "./searchResults";
import "../styles/styles.css";

class SearchBar extends Component {
  state = {
    showResults: false,
    outerDivNode: createRef(),
    textInputNode: createRef(),
    inputValue: ""
  };

  handleChange = searchStr => {
    this.setState({ inputValue: searchStr });
    this.props.onChange(searchStr);
    if (this.props.searchResults.length > 0)
      this.setState({ showResults: true });
  };
  handleClickInside = () => {
    this.setState({ showResults: true });
  };

  handleClickOutside = e => {
    if (this.state.outerDivNode.current.contains(e.target)) return;
    this.setState({ showResults: false });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  handleAddDevice = deviceInfo => {
    this.setState({ showResults: false });
    this.setState({ inputValue: "" });
    this.props.onAddDevice(deviceInfo);
  };
  handleUnfocus = () => {
    console.log("UNFOCUS");
    this.setState({ showResults: false });
  };

  render() {
    return (
      <div
        className=""
        style={{
          maxHeight: "32vh",
          height: "32vh",
          width: "360px",
          borderRadius: "5px"
        }}
      >
        <div
          className="shadow"
          style={{
            height: "38px",
            width: "340px",
            padding: "0px",
            marginLeft: "8px"
          }}
          ref={this.state.outerDivNode}
        >
          <FormControl
            className="search-bar"
            onClick={this.handleClickInside}
            onChange={event => this.handleChange(event.target.value)}
            placeholder="Search for a device"
            value={this.state.inputValue}
            ref={this.state.textInputNode}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              width: "100%",
              padding: "5px"
            }}
          />
        </div>
        <div
          className={this.state.showResults ? "shadow" : "hidden"}
          style={{
            maxHeight: "26vh",
            width: "340px",
            top: "1px",
            overflowX: "hidden",
            overflowY: "auto",
            borderRadius: "5px",
            backgroundColor: "rgba(255,255,255,0.3)",
            padding: "5px",
            marginLeft: "8px"
          }}
        >
          <SearchResults
            onAddDevice={this.handleAddDevice}
            searchResults={this.props.searchResults}
            showResults={this.state.showResults}
            onBlur={this.handleUnfocus}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
