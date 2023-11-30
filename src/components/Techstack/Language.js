import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCplusplus, SiPython, SiCsharp } from "react-icons/si";
import { FaJava } from "react-icons/fa";

function Language() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
    </Row>
  );
}

export default Language;
