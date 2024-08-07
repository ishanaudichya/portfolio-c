import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Timeline from "./Timeline";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple"> Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Timeline />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
