import "../styles/styles.css";
import React, { Component, createRef } from "react";

import FormControl from "react-bootstrap/FormControl";
import SearchResults from "./searchResults";

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
    console.log("CLICKED INSIDE");
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
    this.setState({ inputValue: "" });
    this.props.onAddDevice(deviceInfo);
  };

  render() {
    return (
      <div
        className="hide-scrollbar"
        style={{ height: "38px" }}
        ref={this.state.outerDivNode}
      >
        <FormControl
          onClick={this.handleClickInside}
          onChange={event => this.handleChange(event.target.value)}
          placeholder="Search for a device"
          value={this.state.inputValue}
          ref={this.state.textInputNode}
        />
        <div
          className="hide-scrollbar"
          style={{
            maxHeight: "300px",
            position: "relative",
            top: "3px",
            overflowY: "scroll",
            borderRadius: "5px"
          }}
        >
          <SearchResults
            onAddDevice={this.handleAddDevice}
            searchResults={this.props.searchResults}
            showResults={this.state.showResults}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
