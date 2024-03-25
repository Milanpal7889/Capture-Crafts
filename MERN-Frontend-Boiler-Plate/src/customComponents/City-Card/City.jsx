import { Button, Card, Form, Modal } from "react-bootstrap";
import "./City.scss";
// import img1 from "../../assets/images/award-1-134x98-inverse.png";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import axiosConfig from "../../helper/config";
import FormData from "form-data";
import AppContext from "../../context/AppContext";
export const City = (city) => {
  const { state } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [cityData, setCitysData] = useState(city.citysprop);
  const [file, setFile] = useState(null);
  const Deletecity = async () => {
    try {
      const response = await axiosConfig.delete(
        `/admin/removecity/${cityData._id}`
      );
      if (!response?.data?.error) {
        const citysDatares = await response?.data;
        window.location.reload();
        console.log(citysDatares.data);
      }
    } catch (err) {
      console.error({
        error: true,
        message: "Server Error",
        errorMessage: err.message,
      });
    }
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append("image", file);
      }
      formData.append("cityname", cityData.cityname);
      formData.append("citydesc", cityData.citydesc);
      const response = await axiosConfig.put(
        `/admin/updatecity/${cityData._id}`,
        formData
      );
      if (!response?.data?.error) {
        window.location.reload(true);
        const citysDatares = await response?.data;
        console.log(citysDatares.data);
      }
      setShow(false);
    } catch (err) {
      console.error({
        error: true,
        message: "froentend Server Error",
        errorMessage: err,
      });
    }
  };
  return (
    <>
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
                onChange={(e) =>
                  setCitysData({ ...cityData, cityname: e.target.value })
                }
                value={cityData.cityname}
                name="cityname"
                type="text"
                placeholder="Enter City Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="CityDesc">
              <Form.Label>City Desc</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setCitysData({ ...cityData, citydesc: e.target.value })
                }
                value={cityData.citydesc}
                type="text"
                name="citydesc"
                placeholder="Enter City Desc"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>
      <Card className="city-card">
        <Card.Img
          variant="top"
          src={`http://localhost:5000/api/image/${cityData.imageUrl}`}
        />
        <Card.Body>
          <Card.Title>{cityData.cityname}</Card.Title>
          <Card.Text>{cityData.citydesc}</Card.Text>
          {state.role == "admin" && (
            <>
              <Button
                variant="primary"
                onClick={() => setShow(true)}
                className="me-1"
              >
                Edit City
              </Button>
              <Button onClick={Deletecity} variant="primary">
                Delete City
              </Button>
            </>
          )}
          {state.role !== "admin" && (
            <>
              <Button
                variant="primary"
                onClick={() => console.log("cityBooked")}
                className="me-1"
              >
                BookCity
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

City.propTypes = {
  city: PropTypes.object,
};
