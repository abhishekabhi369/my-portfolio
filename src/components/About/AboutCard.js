import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I'm ABHISHEK, a Computer Science graduate from APJ Abdul Kalam Technological University.Iam a MERN Stack Developer and passionate about coding,  innovation, and exploring new horizons. 
                            Feel free to browse my portfolio to discover the digital landscapes I've crafted. Let's connect and collaborate to create something remarkable in the tech world!

          </p>
        

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
