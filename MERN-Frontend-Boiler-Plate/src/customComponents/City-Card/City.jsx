import { Button, Card, Form, Modal } from "react-bootstrap";
import "./City.scss";
import img1 from "../../assets/images/award-1-134x98-inverse.png";
import { useState } from "react";
import PropTypes from "prop-types";

export const City = (city) => {
  const [show, setShow] = useState(false);
  const [cityData, setCitysData] = useState(city.citysprop);
  const HandleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("something is wrong")
    } catch (err) {
      console.error( {error:true, message: "Server Error" ,errorMessage: err.message});
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
                  setCitysData({ ...cityData, cityname: e.target.value })
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
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>{cityData.cityname}</Card.Title>
          <Card.Text>
            {cityData.citydesc}
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => setShow(true)}
            className="me-1"
          >
            Edit City
          </Button>
          <Button variant="primary">Delete City</Button>
        </Card.Body>
      </Card>
    </>
  );
};

City.propTypes = {
  city: PropTypes.object
};
