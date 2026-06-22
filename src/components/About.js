import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/Yash_S.jpg"; 
import "animate.css";
import TrackVisibility from "react-on-screen";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInLeft"
                      : ""
                  }
                >
                  <img
                    src={profileImg}
                    alt="Yash Sahejwani"
                    className="about-img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInRight"
                      : ""
                  }
                >
                  <span className="about-tagline">
                    ABOUT ME
                  </span>

                  <h2>Who Am I?</h2>

                  <p>
                    Hi, I'm <strong>Yash Sahejwani</strong>, a
                    Computer Science Engineering graduate passionate
                    about Software Development, Web Development,
                    and IT Support.
                  </p>

                  <p>
                    During my internship at
                    <strong> Softronix Solutions Pvt. Ltd.</strong>,
                    I gained hands-on experience working on
                    real-world software projects and strengthened
                    my skills in frontend development, backend
                    integration, database management, and
                    problem-solving.
                  </p>

                  <p>
                    I enjoy building modern web applications using
                    React.js, JavaScript, Node.js, MySQL, and Git.
                    My goal is to continuously learn new
                    technologies and contribute to impactful
                    software solutions.
                  </p>

                  <div className="about-stats">
                    <div>
                      <h3>1+</h3>
                      <span>Internship</span>
                    </div>

                    <div>
                      <h3>5+</h3>
                      <span>Projects</span>
                    </div>

                    <div>
                      <h3>10+</h3>
                      <span>Technologies</span>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};