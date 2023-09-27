import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. Here are some of my projects.
Make sure to visit my github for all the other project repositories
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GitHub Buddy Glimpse"
              description="GitHub Buddy Glimpse is a project website that allows you to easily view the entire GitHub profile of a user just by entering their username. It provides an efficient way to display the user's repositories and basic information in a user-friendly manner."
              ghLink="https://github.com/ishanaudichya/Git-Buddy-Glimpse"
              demoLink="https://githubbuddyglimpse.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AudiChat | Real-time Chatapp"
              description="AudiChat is a real-time chat application that allows users to seamlessly communicate with each other. Whether you want to connect with friends, family, or colleagues, AudiChat provides a user-friendly interface for chatting, sharing images and videos"
              ghLink="https://github.com/ishanaudichya/AudiChat-client"
              demoLink="https://audi-chat.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Dotify | Img to Reacitve dots"
              description="Dotify is a web-based project that harnesses the power of JavaScript to breathe life into your favorite images, allowing them to come alive as reactive dots that collide, merge, and leave behind an impression of the original image."
              ghLink="https://github.com/ishanaudichya/reactive-dots"
              demoLink="https://reactive-dots-ishan.netlify.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hand Gesture Tracking ImP"
              description="Hand tracking and body tracking module that maps cardinal points using computer vision. Uses the mediapipe library for accurate results and recognition."
              ghLink="https://github.com/ishanaudichya/OpenCV"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
