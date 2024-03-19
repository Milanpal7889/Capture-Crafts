import { Form, FormGroup, InputGroup } from "react-bootstrap";
import "./Signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export const Signup = () => {
  return (
    <>
      <div className="form-container">
        <Form className="custom-form-signup">
          <h1 className="heading">Signup</h1>
          <FormGroup>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon className="icon" icon={faUser} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Enter username" />
            </InputGroup>
          </FormGroup>
          <Form.Group controlId="formBasicEmail">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
            <Form.Control type="email" placeholder="Enter email" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <InputGroup>
              <InputGroup.Text>
              <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Password" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <InputGroup>
              <InputGroup.Text>
              <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control type="password" placeholder="Confirm Password" />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicButton" className="my-3">
            <button className="btn btn-primary px-5 py-1 text-white fs-4">
              Submit
            </button>
          </Form.Group>
        </Form>
      </div>
      ;
    </>
  );
};
