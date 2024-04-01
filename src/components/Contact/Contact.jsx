import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import pdf from "../../Assets/../Assets/Mern Stack Developer.pdf";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineDownload } from "react-icons/ai";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

import { Link } from 'react-router-dom';
  // import pdf from "../../Assets/Abhishek -MERNSTACK.pdf";

function Contact() {
    
    
  return (
    <div className='bg-black'>
       <Container fluid className="about-education">
    
    <Container>
      <Row style={{ justifyContent: "center" }}>
      
        <div class="heading text-center contact-me">
          <h2>Contact <strong className='purple'>Me</strong></h2>
        </div>
      </Row>
      <Row style={{textAlign:"justify"}}>
                <div className="contact d-flex">
                    <div className="left-contact">
                    <div class="information">
                        <div class="info-box">
                               <FaPhoneAlt />
                               &nbsp;<span>+971 559684422</span>
                        </div>
                        <div class="info-box">
                        <BiLogoGmail />
                        &nbsp;<span>abhishekabhitir@gmail.com</span>
                        </div>
                    </div>
                    <div class="social-icons " >
                    <ul className="home-about-social-links linksul d-flex" >
              <li className="social-icons ">
                <a
                  href="https://github.com/abhishekabhi369"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-kp-810481233"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/abhishek_bharath"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
                    </div>
        <div style={{justifyContent: "center", position: "relative"}}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{maxWidth: "250px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </div>
                    </div>
                    <div className="right-contact">
                    <form style={{ justifyContent: "center", position: "relative" }}>
                        <input type="text" name="Name" placeholder="Your Name" />
                        <input type="email" name="Email" placeholder="Your Email" />
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                    <Link to={'/'}>    <Button style={{justifyContent: "center", position: "relative" }}  variant="primary" download class="btn btn2">Submit</Button></Link>
                    </form>
                

                    </div>
                </div>
            </Row>
   
    </Container>
   
  </Container>
    </div>
  )
}

export default Contact