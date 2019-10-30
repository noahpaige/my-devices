import React, { Component, createRef } from "react";

import FormControl from "react-bootstrap/FormControl";
import SearchResultList from "./searchResultList";

class SearchBar extends Component {
  state = {
    showResults: false,
    node: createRef()
  };
  //static node = createRef();

  handleChange = searchStr => {
    console.log("Mounting searchbar");
    if (this.props.searchResults.length > 0)
      this.setState({ showResults: true });
    this.props.onChange(searchStr);
  };
  handleClickInside = () => {
    console.log("CLICKED INSIDE");
    this.setState({ showResults: true });
  };

  handleClickOutside = e => {
    if (this.state.node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    this.setState({ showResults: false });
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div style={{ height: "38px" }} ref={this.state.node}>
        <FormControl
          onClick={this.handleClickInside}
          onChange={event => this.handleChange(event.target.value)}
          placeholder="Search for a device"
        />
        <div
          style={{
            maxHeight: "300px",
            position: "relative",
            top: "100%",
            overflowY: "scroll"
          }}
        >
          <SearchResultList
            searchResults={this.props.searchResults}
            showResults={this.state.showResults}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
