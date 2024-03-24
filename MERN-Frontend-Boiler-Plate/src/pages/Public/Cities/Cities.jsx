import { Col, Container, Row } from "react-bootstrap";
import { City } from "../../../customComponents/City-Card/City";
import axios from "axios";
import { useEffect, useState } from "react";
export const Citys = () => {
  const [citysData, setCitysData] = useState([]);
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
    <Container className="cities">
      <Row>
        <h1 className="heading">Cities</h1>
      </Row>
      <Row>
        { citysData.map((city) => (
          <Col sm={12} md={4} lg={3} key={city._id}>
            <City citysprop={city} />
            {/* {console.log(city)} */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
