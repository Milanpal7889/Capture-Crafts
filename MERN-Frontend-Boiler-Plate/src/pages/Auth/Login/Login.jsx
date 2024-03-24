import { Button, Container, Form, InputGroup } from "react-bootstrap";
import "./Login.scss";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ToastBs from "../../../commonComponents/Toast/Toast";
export const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");
  if (isLoggedIn) {
    navigate("/");
  }
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const { email, password } = userData;
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );
      if (!error) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (err) {
      console.error("Login Error", err);
      setError(true);
    }
  };
  return (
    <>
        {
          error && (
            <ToastBs message="Invalid Credentials" type="danger" />
          )
        }
      <Container className="login-form">
        <Form onSubmit={handleSubmit} className="custom-form-login shadow">
          <h1 className="heading">Login</h1>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
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
                type="email"
                name="email"
                value={userData.email}
                placeholder="Enter email"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
              <InputGroup.Text>
                <FontAwesomeIcon className="icon" icon={faLock} />
              </InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                type="password"
                name="password"
                value={userData.password}
                placeholder="Password"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button type="submit" className="btn btn-primary" as="button">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
