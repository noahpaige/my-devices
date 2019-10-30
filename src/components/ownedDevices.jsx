import React, { Component } from "react";
//import Device from "./device";

import Row from "react-bootstrap/Row";
import OwnedDevice from "./ownedDevice";

class OwnedDevices extends Component {
  state = {};

  render() {
    return (
      <div
        className="container"
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >
        {this.state.items.map(deviceInfo => (
          <Row
          //style={{ height: "12rem" }}
          >
            <OwnedDevice
              key={deviceInfo.id}
              deviceInfo={deviceInfo}
              onDelete={this.props.handleDelete}
            />
          </Row>
        ))}
      </div>
    );
  }
}

export default OwnedDevices;
