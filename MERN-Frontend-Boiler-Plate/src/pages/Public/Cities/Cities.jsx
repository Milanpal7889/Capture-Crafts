import { Col, Container, Row } from "react-bootstrap";
import { City } from "../../../customComponents/City-Card/City";

export const Citys = () => {
  return (
    <Container className="cities">
        <Row>
            <h1 className="heading">Cities</h1>
        </Row>
      <Row>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <City />
        </Col>
      </Row>
    </Container>
  );
};
