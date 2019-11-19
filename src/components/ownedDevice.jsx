import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";

import "../styles/styles.css";

class ownedDevice extends Component {
  render() {
    return (
      <Toast
        onClose={() => this.props.onDelete(this.props.deviceInfo.id)}
        style={{
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.05)",
          boxShadow: "none"
        }}
      >
        <Toast.Header
          style={{
            backgroundColor: "rgba(0,0,0,0.04)",
            color: "#696970"
          }}
        >
          <img
            src={this.props.deviceInfo.image}
            style={{ maxHeight: "30px", maxWidth: "30px" }}
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">{this.props.deviceInfo.name}</strong>
        </Toast.Header>
        <Toast.Body>
          <button
            className="wiki-button"
            onClick={() =>
              window.open(this.props.deviceInfo.wikiLink, "_blank")
            }
          >
            wiki
          </button>
        </Toast.Body>
      </Toast>
    );
  }
}

export default ownedDevice;
