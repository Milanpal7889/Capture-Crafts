import { Button, Container, Form, FormText, InputGroup } from "react-bootstrap";
import "./Login.scss";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Login = () => {
  return (
    <>
      <Container className="login-form">
        <Form className="custom-form-login shadow">
          <h1 className="heading">Login</h1>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
              <InputGroup.Text>
                <FontAwesomeIcon className="icon" icon={faUser} />
              </InputGroup.Text>
              <Form.Control type="email" placeholder="Enter email" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
              <InputGroup.Text>
                <FontAwesomeIcon className="icon" icon={faLock} />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Password" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button className="btn btn-primary">Login</Button>
            <FormText>Forgot Password?</FormText>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
