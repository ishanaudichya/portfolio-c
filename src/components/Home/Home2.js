import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pp.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function Home2({ setGameActive }) {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I specialize in development stack, with a strong focus on{" "}
              <b className="purple">System Design</b> for creating modern web
              applications.
              <br />I have a keen interest in{" "}
              <b className="purple">Data Structures</b> and{" "}
              <b className="purple">Algorithm</b>, and I'm proficient in using
              MERN Stack
              <br />
              My programming skills encompass{" "}
              <b className="purple">Python, C++, Java, and JavaScript </b>
              <br />
              I'm committed to continuous learning and staying up-to-date with
              emerging technologies and proficient in{" "}
              <b className="purple">AWS</b>.
              <br />
              My problem-solving mindset and dedication to coding excellence
              drive me to excel in my work.<br></br>
              Make sure to visit my <b className="purple">Projects</b> and see
              all the live demos and code.
            </p>
            <br />
            <br />
            <Button onClick={setGameActive} className="fork-btn-inner">
              Play a Game
            </Button>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ishanaudichya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ishan_audichya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.9em"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ishan-audichya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ishannnn.nn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
