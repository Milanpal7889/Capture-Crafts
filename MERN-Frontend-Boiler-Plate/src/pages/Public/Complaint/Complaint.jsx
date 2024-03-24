import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Form,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import "./Complaint.scss";
import {
  faEnvelope,
  faFileLines,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
                        
const Complaint = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Container className="complaint-form shadow" fluid>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <h1 className="text-center">Complaint Form</h1>
          </FormGroup>
          <FormGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon className="icon" icon={faUser} />
              </InputGroup.Text>
              <Form.Control
                required
                onChange={(e) => {
                  setFormData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="name"
                type="text"
                placeholder="Enter Your name"
              />
            </InputGroup>
          </FormGroup>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                required
                onChange={(e) => {
                  setFormData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faFileLines} />
              </InputGroup.Text>
              <Form.Control
                required
                onChange={(e) => {
                  setFormData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="message"
                type="text"
                placeholder="message"
                as="textarea"
                rows={3}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicButton" className="my-3">
            <button className="btn btn-primary px-5 py-1 text-white fs-4">
              Submit
            </button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Complaint;
