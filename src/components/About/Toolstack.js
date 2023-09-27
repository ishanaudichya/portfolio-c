import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJupyter,
  SiBlender,
  SiWindows,
  SiAnaconda,
  SiCodepen,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBlender/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen/>
        </Col>
    </Row>
  );
}

export default Toolstack;
