import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class NoneResult extends Component {
  render() {
    return (
      <Button
        disabled
        className="m-2"
        style={{
          width: "100%",
          backgroundColor: "#cccccc",
          borderWidth: "0",
          color: "#696970"
        }}
      >
        No Results
      </Button>
    );
  }
}

export default NoneResult;
