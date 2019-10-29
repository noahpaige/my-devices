import React, { Component } from "react";
//import Device from "./device";
import OwnedDevice from "./ownedDevice";
import CardColumns from "react-bootstrap/CardColumns";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Devices extends Component {
  state = {
    items: [
      {
        id: 0,
        name: "iPhone XR 1",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.thumbnail",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 1,
        name: "Xbox One 1",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 2,
        name: "iPhone XR 2",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 3,
        name: "Xbox One 2",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 4,
        name: "iPhone XR 3",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 5,
        name: "Xbox One 3",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 6,
        name: "iPhone XR 4",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 7,
        name: "Xbox One 4",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 8,
        name: "iPhone XR 5",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 9,
        name: "Xbox One 5",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 10,
        name: "iPhone XR 6",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 11,
        name: "Xbox One 6",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      }
    ]
  };

  handleDelete = deviceId => {
    const items = this.state.items.filter(d => d.id !== deviceId);
    this.setState({ items });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          width: "50rem",
          height: "100vh",
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
              onDelete={this.handleDelete}
            />
          </Row>
        ))}
      </div>
    );
  }
}

export default Devices;
