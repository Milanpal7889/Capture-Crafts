import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Bookus.scss";
import { useState } from "react";
export const Bookus = () => {
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
    <>
      <Container className="bookus" fluid>
        <Row>
          <Col className="bookus-col">
            <Form
              className="bookus-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              as={"form"}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Form.Group controlId="eventDate" className="form-inline">
                <Form.Control placeholder="" type="Date" required />
                <Form.Label className="bookus-label">Event Date</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter the event date.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="yourname" className="form-inline">
                <Form.Control placeholder="" type="text" required />
                <Form.Label className="bookus-label">Your Name</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter Your Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="youremail" className="form-inline">
                <Form.Control placeholder="" type="email" required />
                <Form.Label className="bookus-label">E-mail</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter valid Email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="yourmessage" className="form-inline">
                <Form.Control
                  placeholder=""
                  type="text"
                  className="form-textarea"
                  rows={3}
                  as={"textarea"}
                  required
                />
                <Form.Label className="bookus-label">Your Message</Form.Label>
                <Form.Control.Feedback type="invalid">
                  Please enter Your Message.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="submitButton" className="form-inline">
                <Button className="submit-button" type="submit">
                  make an appointment
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <Col className="bookus-text">
            <div className="bookus-text-inner">
              <h1 className="bookus-text-heading">Book Your Photo Shoot</h1>
              <p className="bookus-text-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus praesentium nam harum? Totam, excepturi corporis in
                dolor repellendus nesciunt hic enim dolorem fugit qui cumque
                consequatur, sunt sint aliquid! Veritatis!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
