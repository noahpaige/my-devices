import React, { Component } from "react";

import Form from "react-bootstrap/Form";

class SearchBar extends Component {
  state = {};

  render() {
    return (
      <Form>
        <Form.Group controlId="searchString">
          <Form.Control
            onChange={event =>
              this.props.handleSearchChange(event.target.value)
            }
            placeholder="Search for a device"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
