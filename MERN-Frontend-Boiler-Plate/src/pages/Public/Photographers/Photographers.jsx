import { Col, Container, Row } from "react-bootstrap";
import { Photographer } from "../../../customComponents/Photographer-Card/Photographer";
import "./Photographers.scss";
export const Photographers = () => {
  return (
    <Container className="Photographers">
      <Row>
        <h1 className="heading">Photographers</h1>
      </Row>
      <Row>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
        <Col sm={12} md={4} lg={3}>
          <Photographer />
        </Col>
      </Row>
    </Container>
  );
};
