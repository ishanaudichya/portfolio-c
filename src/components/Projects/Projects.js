import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import url from "../../Assets/Projects/url.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import chatbot from "../../Assets/Projects/chatbot.jpg";
import bitsOfCode from "../../Assets/Projects/blog.png";
import sales from "../../Assets/Projects/sales.png";
import imgcrypt from "../../Assets/Projects/imgcrypt.png";
import vitsphere from "../../Assets/Projects/vitsphere.png";
import erp from "../../Assets/Projects/erp.png";
import easydeploy from "../../Assets/Projects/easydeploy.png";
import blogecs from "../../Assets/Projects/blogecs.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. Here are some of my
          projects. Make sure to visit my github for all the other project
          repositories
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easydeploy}
              isBlog={false}
              title="EasyDeploy | AWS EC2 S3 | Redis"
              description="Scalable One click deployement using AWS services. It converts any git repository to react build in an EC2 instance uploads it to a S3 bucket and then serves the build using a reverse proxy server. Logs using REDIS and WEBSOCKETS  "
              ghLink="https://github.com/ishanaudichya/easydeploy"
              demoLink="https://www.youtube.com/watch?v=-gj5By1Q3CU"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vitsphere}
              isBlog={false}
              title="VitSphere | Social Media for VITians"
              description="Full-stack MERN project designed to create a thriving online community for VIT students. This platform allows students to connect, share posts, toggle between dark and light themes, and manage their sessions securely."
              ghLink="https://github.com/ishanaudichya/social-media"
              demoLink="https://vitsphere.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={erp}
              isBlog={false}
              title="Business ERP Software | Inventory Management & Invoicing"
              description=" MERN Business Software simplifies inventory management and invoicing. Easily add, categorize, and edit products. Create professional invoices with real-time data sync and a powerful tech stack. Your one-stop solution for business needs"
              ghLink="https://github.com/ishanaudichya/business-erp-mern"
              demoLink="https://neonsports.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales Management Software"
              description="React.js-based Web Software that offers secure authentication, comprehensive sales analytics, employee management, data export, and intuitive task management, all with a user-friendly interface and support for light and dark modes for a seamless user experience."
              ghLink="https://github.com/ishanaudichya/sales-management-software"
              demoLink="https://audichyaenterprises.netlify.app/"
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
              imgPath={blogecs}
              isBlog={false}
              title="Blogify | Blogging Platform"
              description="Is a EJS blogging platform with MongoDB. DockerFile with compose and port mapping. Image pushed to dockerhub and deployed on AWS EC2 instance & ECR "
              ghLink="https://github.com/ishanaudichya/blog-ecs-node"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imgcrypt}
              isBlog={false}
              title="ImageCrypt | Secure Image Encryption"
              description="ImageCrypt is a react tool that uses AES-256 encryption to securely convert image files into encrypted strings, safeguarded by a userdefined password. It ensures data confidentiality, allowing users to decrypt and retrieve their images when needed."
              ghLink="https://github.com/ishanaudichya/Image-encryption-service"
              demoLink="https://image-crypt.netlify.app/"
            />
          </Col>

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
              imgPath={url}
              isBlog={false}
              title="Malware Detection ML Model"
              description="This Python machine learning project utilizes scikit-learn, XGBoost, LightGBM, and Seaborn to classify URLs as either malware or phishing based on the Kaggle Malware URL dataset. It includes data cleaning, common token analysis, model training and url analysis"
              ghLink="https://github.com/ishanaudichya/gpt3.5-chatbot-openaiapi"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="GPT-3.5 ChatBot"
              description="Chat Bot with GPT 3.5 is a React-based chat application that connects to the OpenAI API, providing a platform for interactive queries and answers using cutting-edge natural language processing."
              ghLink="https://github.com/ishanaudichya/gpt3.5-chatbot-openaiapi"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
