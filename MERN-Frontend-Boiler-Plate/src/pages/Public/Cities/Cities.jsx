import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { City } from "../../../customComponents/City-Card/City";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosConfig from "../../../helper/config";
import ToastBs from "../../../commonComponents/Toast/Toast";
import FormData from "form-data";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

export const Citys = () => {
  const { state } = useContext(AppContext);
  const [error, setError] = useState(false);
  const [citysData, setCitysData] = useState([]);
  const [createCity, setCreateCity] = useState({
    cityname: "",
    citydesc: "",
  });
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const loggedIn = localStorage?.getItem("user") ? false : true;
  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/login";
    }
  }, [loggedIn]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("cityname", createCity.cityname);
      formData.append("citydesc", createCity.citydesc);
      const response = await axiosConfig.post("/admin/addcity", formData);
      if (!response?.data?.error) {
        const createcityDatares = await response?.data;
        console.log(createcityDatares);
        window.location.reload();
      }
      setShow(false);
    } catch (err) {
      setError(err.response.data.exists);
      console.error({
        error: true,
        message: "here Server Error",
        errorMessage: err.message,
      });
    }
  };
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/allcities"
        );
        if (!response?.data?.error) {
          const citysDatares = await response?.data;
          setCitysData(citysDatares?.Data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);
  return (
    <>
      {error && <ToastBs message="City already exists" type="danger" />}
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                name="image"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cityName">
              <Form.Label>City Name</Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  setCreateCity({ ...createCity, cityname: e.target.value })
                }
                value={createCity.cityname}
                name="cityname"
                type="text"
                placeholder="Enter City Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="CityDesc">
              <Form.Label>City Desc</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setCreateCity({ ...createCity, citydesc: e.target.value })
                }
                value={createCity.citydesc}
                type="text"
                name="citydesc"
                placeholder="Enter City Desc"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
      <Container className="cities">
        <Row>
          <Col>
            <h1 className="heading">Cities</h1>
          </Col>
          {state.role === "admin" && (
            <Col className="text-end">
              <button onClick={() => setShow(true)} className="btn btn-primary">
                Create City
              </button>
            </Col>
          )}
        </Row>
        <Row>
          {citysData.map((city) => (
            <Col sm={12} md={4} lg={3} key={city._id}>
              <City citysprop={city} />
              {/* {console.log(city)} */}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
