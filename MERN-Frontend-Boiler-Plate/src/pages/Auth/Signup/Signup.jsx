import { Form, FormGroup, InputGroup } from "react-bootstrap";
import "./Signup.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export const Signup = () => {
  const [error, setError] = useState(false);
  const [wrongpass, setWrongpass] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmpass, setConfirmpass] = useState("");

  setTimeout(() => {
    setWrongpass(false);
  }, 3000);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (userData.password !== confirmpass) {
        setWrongpass(true);
        return;
      }
      setError(false);
      const { name, email, password } = userData;
      const response = await axios.post(
        "http://localhost:5000/api/user/signup",
        {
          name,
          email,
          password,
        }
      );
      if (!error) {
        localStorage.setItem("user", response.data.user);
        localStorage.setItem("token", response.data.token);
        navigate("/login");
      }
    } catch (err) {
      console.error("Signup Error", err);
      setError(true);
    }
  };

  return (
    <>
      <div className="form-container">
        <Form onSubmit={handleSubmit} className="custom-form-signup">
          <h1 className="heading">Signup</h1>
          <FormGroup>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon className="icon" icon={faUser} />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
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
          <Form.Group controlId="formBasicEmail">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelope} />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
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
          <Form.Group controlId="formBasicPassword">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                name="password"
                type="password"
                placeholder="Password"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setConfirmpass(e.target.value);
                }}
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
              />
              {wrongpass && (
                <InputGroup.Text className="text-danger">confirm pass does not match</InputGroup.Text>
              )}
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
