import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../styles/styles.css";

class SearchResult extends Component {
  render() {
    return (
      <Button
        onClick={() => this.props.onAddDevice(this.props.deviceInfo)}
        className="m-2"
        border="0"
        variant="light"
        style={{
          width: "100%",
          border: "0px",
          marginTop: "0px",
          borderRadius: "8px"
        }}
      >
        <div className="gridContainer">
          <Row>
            <Col xs={4} className="align-middle">
              <Image
                src={this.props.deviceInfo.image}
                rounded="true"
                fluid="true"
                style={{
                  verticalAlign: "middle"
                }}
              />
            </Col>
            <Col
              style={{
                display: "flex",
                verticalAlign: "left",
                color: "#6c757d"
              }}
            >
              <p className="align-left" style={{ margin: "auto" }}>
                {this.props.deviceInfo.name}
              </p>
            </Col>
          </Row>
        </div>
      </Button>
    );
  }
}

export default SearchResult;
