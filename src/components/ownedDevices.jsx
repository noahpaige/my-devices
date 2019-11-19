import "../styles/styles.css";
import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import OwnedDevice from "./ownedDevice";

class OwnedDevices extends Component {
  state = {};

  render() {
    return (
      <div
        className="new-scrollbar un-blur"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "5px",
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "5px"
        }}
      >
        <div
          className="container hide-scrollbar"
          style={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          }}
        >
          {this.props.ownedDevices.map(deviceInfo => (
            <Row
              style={{
                marginTop: "6px",
                marginLeft: "-6px",
                marginRight: "-6px"
              }}
              key={deviceInfo.id}
            >
              <OwnedDevice
                key={deviceInfo.id}
                deviceInfo={deviceInfo}
                onDelete={this.props.onDelete}
              />
            </Row>
          ))}
        </div>
      </div>
    );
  }
}

export default OwnedDevices;
