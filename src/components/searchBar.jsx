import "../styles/styles.css";
import React, { Component, createRef } from "react";

import FormControl from "react-bootstrap/FormControl";
import SearchResultList from "./searchResultList";

class SearchBar extends Component {
  state = {
    showResults: false,
    node: createRef()
  };

  handleChange = searchStr => {
    this.props.onChange(searchStr);
    if (this.props.searchResults.length > 0)
      this.setState({ showResults: true });
    this.props.onChange(searchStr);
    console.log("show results? " + this.state.showResults);
  };
  handleClickInside = () => {
    this.setState({ showResults: true });
    console.log("Clicked inside search");
  };

  handleClickOutside = e => {
    if (this.state.node.current.contains(e.target)) return;
    this.setState({ showResults: false });
    console.log("Clicked outside search");
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div
        className="hide-scrollbar"
        style={{ height: "38px" }}
        ref={this.state.node}
      >
        <FormControl
          onClick={this.handleClickInside}
          onChange={event => this.handleChange(event.target.value)}
          placeholder="Search for a device"
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
          <SearchResultList
            onAddDevice={this.props.onAddDevice}
            searchResults={this.props.searchResults}
            showResults={this.state.showResults}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
