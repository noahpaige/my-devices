import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";

class ownedDevice extends Component {
  render() {
    return (
      <Toast
        onClose={() => this.props.onDelete(this.props.deviceInfo.id)}
        style={{ width: "100%", maxWidth: "100% !important" }}
      >
        <Toast.Header>
          <img
            src={this.props.deviceInfo.image}
            style={{ maxHeight: "30px", maxWidth: "30px" }}
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">{this.props.deviceInfo.name}</strong>
        </Toast.Header>
        <Toast.Body>
          <Button
            onClick={() =>
              window.open(this.props.deviceInfo.wikiLink, "_blank")
            }
            variant="primary"
            block
          >
            wiki
          </Button>
        </Toast.Body>
      </Toast>

      // <Card border="primary" style={{ width: "100%" }}>
      //   <div className="gridContainer">
      //     <Row>
      //       <Col xs={2} style={{ position: "relative" }}>
      //         <div
      //           style={{
      //             position: "absolute",
      //             top: "50%",
      //             transform: "translateY(-50%)",
      //             marginLeft: "15px"
      //           }}
      //         >
      //           <Card.Img
      //             src={this.props.deviceInfo.image}
      //             rounded="true"
      //             fluid="true"
      //           />
      //         </div>
      //       </Col>
      //       <Col>
      //         <Row>
      //           <Col xs="12">
      //             <h5 style={{ textAlign: "center" }}>
      //               {this.props.deviceInfo.name}
      //             </h5>
      //           </Col>
      //         </Row>
      //         <Row>
      //           <Card.Body>
      //             <Button
      //               onClick={() =>
      //                 window.open(this.props.deviceInfo.wikiLink, "_blank")
      //               }
      //               variant="primary"
      //               block
      //             >
      //               wiki
      //             </Button>
      //           </Card.Body>
      //         </Row>
      //       </Col>
      //     </Row>
      //   </div>
      //   <div style={{ position: "absolute", width: "100%" }}>
      //     <button
      //       onClick={() => this.props.onDelete(this.props.deviceInfo.id)}
      //       type="button"
      //       className="close"
      //       aria-label="Close"
      //     >
      //       <span className="m-2" aria-hidden="true">
      //         &times;
      //       </span>
      //     </button>
      //   </div>
      // </Card>
    );
  }
}

export default ownedDevice;
