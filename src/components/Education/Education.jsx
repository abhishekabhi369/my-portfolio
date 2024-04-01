import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Contact from "../Contact/Contact";
function Education() {
  return (
    <div>
      <Container fluid className="about-education">
    
        <Container>
          <Row style={{ justifyContent: "center" }}>
          
            <div class="heading">
              <h2>Education</h2>
            </div>
          </Row>
          <Row>
            <div class="main">
              <div class="timeline-items">
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">2020 - 2023</div>
                  <div class="timeline-content">
                    <h3>B Tech in CSE</h3>
                    <p>APJ Abdul Kalam Technological University </p>
                    <p>7.29 CGPA</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">2016 - 2019</div>
                  <div class="timeline-content">
                    <h3>Diploma In Computer Engineering</h3>
                    <p>State Board Of Technical Education</p>
                    <p>7.9 CGPA</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-date">2016</div>
                  <div class="timeline-content">
                    <h3>High School</h3>
                    <p>Kerala State Board</p>
                    <p>84%</p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div class="heading mt-4">
              <h2>Experiences</h2>
            </div>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <section className="experience">
              <div
                class="card"
                style={{ backgroundColor: "transparent", textAlign: "left",color:'white' }}
              >
                <div class="card-body ">
                  <h5 class="card-title purple ">
                    <strong>INTERN, MERN FULL STACK DEVELOPMENT</strong>
                  </h5>
                  <h6>Futura Labs, Kozhikode (AUG 2023-JAN 2024)</h6>
                  <p class="w-100">
                    <li>
                      Completed intensive MERN Full Stack Development internship
                      at Futura Labs.
                    </li>
                    <li>Led dynamic UI creation with React.js.</li>
                    <li>
                      Implemented robust server-side logic and APIs in Node.js
                      for scalability.
                    </li>
                    <li>Mastered MongoDB for efficient database management.</li>
                  </p>
                </div>
              </div>
            </section>
            </Col>
            <Col  xs={12} md={6}>
            <section className="experience text-white">
              <div
                class="card"
                style={{ backgroundColor: "transparent", textAlign: "left" ,color:"white"}}
              >
                <div class="card-body ">
                  <h5 class="card-title purple ">
                    <strong>IT SUPPORT ENGINEER</strong>
                  </h5>
                  <h6>Information Technology Co-operative Society
Malappuram,India(JUNE 2019-JUNE 2020)</h6>
                  <p class="w-100">
                    <li>
                    Enhanced banking software efficiency and customer satisfaction by optimizing Oracle
implementation.
                    </li>
                    <li>Led implementation of client systems on server infrastructure.</li>
                    <li>
                    Utilized advanced SQL queries for efficient database maintenance, ensuring secure
data storage, retrieval, and system performance.
                    </li>
                   
                  </p>
                </div>
              </div>
            </section>
            </Col>
          </Row>
        </Container>
       
      </Container>
    </div>
  );
}

export default Education;
