import React from "react";
import Toolstack from "./Toolstack.js";
// import Particle from "../Particle.js";
import { Container } from "react-bootstrap";
import Frontend from "./Frontend.js";
import Backend from "./Backend.js";
import Database from "./Database.js";
import Language from "./Language.js";
import Devops from "./Devops.js";
function Techstackk() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Container className="skillset">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          Following are the skills and languages I have learned or atleast tried
          to learn during my journey as a developer.
        </Container>
        <Language />
        <Frontend />
        <Backend />
        <Database />
        <Devops />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Techstackk;
