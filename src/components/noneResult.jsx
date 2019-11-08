import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class NoneResult extends Component {
  render() {
    return (
      <Button
        disabled
        variant="light"
        className="m-2"
        border="0"
        style={{ width: "100%" }}
      >
        No Results
        {/* <div className="gridContainer">
          <Row>
            <span style={{ textAlign: "center" }}>No Results</span>
          </Row>
        </div> */}
      </Button>
    );
  }
}

export default NoneResult;
