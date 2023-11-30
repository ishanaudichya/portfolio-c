import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";

function Backend() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
    </Row>
  );
}

export default Backend;
