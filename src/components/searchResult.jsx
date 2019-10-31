import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SearchResult extends Component {
  render() {
    return (
      <Button
        onClick={() => this.props.onAddDevice(this.props.deviceInfo)}
        variant="light"
        className="m-2"
        border="0"
        style={{ width: "100%" }}
      >
        <div className="gridContainer">
          <Row>
            <Col xs={2}>
              <Image
                src={this.props.deviceInfo.image}
                rounded="true"
                fluid="true"
                style={{
                  verticalAlign: "middle"
                }}
              />
            </Col>
            <Col style={{ display: "flex" }}>
              <h5 style={{ margin: "auto" }}>{this.props.deviceInfo.name}</h5>
            </Col>
          </Row>
        </div>
      </Button>
    );
  }
}

export default SearchResult;