import React, { Component } from "react";
import Device from "./device";
import CardColumns from "react-bootstrap/CardColumns";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Devices extends Component {
  state = {
    items: [
      {
        id: 0,
        name: "iPhone XR",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 1,
        name: "Xbox One",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 2,
        name: "iPhone XR",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 3,
        name: "Xbox One",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 4,
        name: "iPhone XR",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 5,
        name: "Xbox One",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 6,
        name: "iPhone XR",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 7,
        name: "Xbox One",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 8,
        name: "iPhone XR",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 9,
        name: "Xbox One",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 10,
        name: "iPhone XR",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 11,
        name: "Xbox One",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      }
    ]
  };
  render() {
    return (
      <div
        className="container"
        style={{
          width: "60rem",
          float: "left"
          //overflowY: "scroll"
          //overflowX: "hidden"
        }}
      >
        <Row
          style={{
            overflowY: "scroll",
            overflowX: "hidden"
          }}
        >
          {this.state.items.map(deviceInfo => (
            <Col xs={4}>
              <Device key={deviceInfo.id} deviceInfo={deviceInfo} />
            </Col>
          ))}
        </Row>
      </div>
      //   <CardColumns
      //     style={{
      //       width: "54rem"
      //     }}
      //   >
      //     {this.state.items.map(deviceInfo => (
      //       <Device key={deviceInfo.id} deviceInfo={deviceInfo} />
      //     ))}
      //   </CardColumns>
    );
  }
}

export default Devices;
