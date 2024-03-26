import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import ToastBs from "../../../commonComponents/Toast/Toast";
import AppContext from "../../../context/AppContext";
import "./JoinPhotographer.scss";
const Joinphotographer = () => {
  const { login } = useContext(AppContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");
  if (isLoggedIn) {
    navigate("/");
  }
  const [userData, setUserData] = useState({
    contact: "",
    shopadress: "",
    price: "",
    shopname: "",
  });

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
        login(response.data.user);
        navigate("/");
      }
    } catch (err) {
      console.error("Login Error", err);
      setError(true);
    }
  };
  return (
    <>
      {error && <ToastBs message="Invalid Credentials" type="danger" />}
      <Container className="login-form">
        <Form onSubmit={handleSubmit} className="custom-form-login shadow">
          <h1 className="heading">Join as a Photographer</h1>
          <Form.Group className="mb-3">
            {/* <Form.Select aria-label="Default City">
              {citys.map((city) => (
                <option key={city._id} value={city._id}>
                  {city.cityname}
                </option>
              ))}
            </Form.Select> */}
            <InputGroup className="form-input">
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                type="number"
                name="contact"
                value={userData.contact}
                placeholder="Enter contact number"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                type="text"
                name="shopname"
                value={userData.shopname}
                placeholder="Enter Shop Name"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                type="number"
                name="price"
                value={userData.price}
                placeholder="Enter Price"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputGroup className="form-input">
              <Form.Control
                onChange={(e) => {
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [e.target.name]: e.target.value,
                  }));
                }}
                type="text"
                name="adress"
                value={userData.shopadress}
                placeholder="Enter Shop Adress"
                required
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3">
            <Button type="submit" className="btn btn-primary" as="button">
              Join
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Joinphotographer;
