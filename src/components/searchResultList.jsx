import React, { Component } from "react";
//import Device from "./device";
import SearchResult from "./searchResult";

import Row from "react-bootstrap/Row";

class SearchResultList extends Component {
  state = {
    items: [
      {
        id: 0,
        name: "Result iPhone XR 1",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.thumbnail",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 1,
        name: "Xbox Result One 1",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 2,
        name: "Result iPhone XR 2",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 3,
        name: "Xbox Result One 2",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 4,
        name: "Result iPhone XR 3",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 5,
        name: "Xbox Result One 3",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 6,
        name: "Result iPhone XR 4",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 7,
        name: "Xbox Result One 4",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 8,
        name: "Result iPhone XR 5",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 9,
        name: "Xbox Result One 5",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/GtHYwOXhf6TNnp2h.large",
        wikiLink: "https://www.ifixit.com/Device/Xbox_One"
      },
      {
        id: 10,
        name: "Result iPhone XR 6",
        image:
          "https://d3nevzfk7ii3be.cloudfront.net/igi/yiiosKwJCvSrNS12.large",
        wikiLink: "https://www.ifixit.com/Device/iPhone_XR"
      },
      {
        id: 11,
        name: "Xbox Result One 6",
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
            <SearchResult
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

export default SearchResultList;
