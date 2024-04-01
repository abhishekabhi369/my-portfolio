import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import shopify from "../../Assets/Projects/Shopify.png";
import shophunt from "../../Assets/Projects/shophunt1.png";

import starbucks from "../../Assets/Projects/starbucks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shophunt}
              title="Shop Hunt"
              description="Created a dynamic platform in MERN technologies for users to search items, find
              nearby stores based on price parameters.
              Utilized Geolocation APIs to determine the user's location and provide accurate
              results for nearby stores."
              ghLink="https://github.com/abhishekabhi369/shop-hunts.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starbucks}
              title="Starbucks"
              description="Developed a responsive and interactive clone of the Starbucks website using React.js.Achieved an efficient, maintainable components and state management. code with React"
              ghLink="https://github.com/abhishekabhi369/starbucks.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
            
              title="Shopify"
              description="Shopify is an e-commerce platform utilized for facilitating online dress orders.
              The project utilizes MERN technology stack for its development."
              ghLink="https://github.com/abhishekabhi369/shopify.git"
                            
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
