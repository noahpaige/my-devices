import React, { Component } from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import Button from "@material-ui/core/Button";

class Device extends Component {
  render() {
    return (
      <Card border="primary m-2">
        <Card.Img
          variant="top"
          src={this.props.deviceInfo.image}
          rounded
          fluid
        />
        <Card.Header as="h5">{this.props.deviceInfo.name}</Card.Header>
        <Card.Body>
          <Button
            onClick={() =>
              window.open(this.props.deviceInfo.wikiLink, "_blank")
            }
            variant="primary"
            block
          >
            wiki
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Device;
