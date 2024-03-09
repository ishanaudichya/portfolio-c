import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi People, I am <span className="purple">Ishan Audichya</span>{" "}
            <i>(a.k.a Audi) </i>
            from <span className="purple"> Udaipur, India.</span>
            <br /> I am a pre-final year student pursuing an Bachelor's Degree
            in Computer Science at{" "}
            <a style={{ textDecoration: "none" }} href="https://vit.ac.in/">
              <span className="purple">
                Vellore Institute of Technology, Vellore
              </span>
            </a>
            <br />
            Additionally, I was last employed as a software developer intern at{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.e-connectsolutions.com/"
            >
              <span className="purple">E-Connect Solutions</span>
            </a>
            <br />
            <br />
            Apart from coding, I'm a quick learner and collaborate closely with
            clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. Let's work together to bring your
            ideas to life!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> 3D designing using Blender
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(0 255 255)" }}>
            "When I start to code, only God and I know what I do. Now only God
            knows."{" "}
          </p> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
