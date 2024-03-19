import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "./Footer.scss";
import "../../globalStyles/buttons.scss";
import logo from "../../assets/images/logo-inverse-243x57.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
export const Footer = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Row className="footer-row">
          <Col className="footer-col">
            <Image src={logo} alt="logo" className="footer-logo" hidden/>
            <h1 className="footer-heading">Capture Crafts</h1>
          </Col>
        </Row>
        <Row className="footer-row">
          <Col className="footer-col">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="footer-form"
            >
              <Form.Group className="form-inline" controlId="footerEmail">
                <Form.Control
                  type="email"
                  placeholder=""
                  className="footer-input"
                  required
                />
                <Form.Label className="footer-label">Your E-mail</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter Valid email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                controlId="footersubmitButton"
                className="form-inline form-inline-button"
              >
                <Button className="footer-button" type="submit">
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="footer-row">
          <Col className="footer-icons">
            <div className="footer-icon">
              <div className="icon-style-camera">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faFacebookF} className="footer-icon" />
              </div>
            </div>
            <div className="footer-icon">
              <div className="icon-style-camera">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
              </div>
            </div>
            <div className="footer-icon">
              <div className="icon-style-camera">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FontAwesomeIcon icon={faPinterest} className="footer-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
