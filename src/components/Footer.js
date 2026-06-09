import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
            <Col xs={12} sm={6}>
              <a
                href="/"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "2rem",
                  fontWeight: "800",
                  color: "#fff",
                  letterSpacing: "1px",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #AA367C 0%, #4A2FBD 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  YASH I SAHEJWANI
                </span>
              </a>
            </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yash-sahejwani-043a82258/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/yash25-CSE"
                                style={{
                                  width: "42px",
                                  height: "42px",
                                  color: "#fff",
                                  textDecoration: "none",
                                }}
                              >
                                <FaGithub size={20} />
                              </a>
              <a href="https://www.instagram.com/yash_sahejwani/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>@Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
