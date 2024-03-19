import { Button, Card } from "react-bootstrap";
import img1 from "../../assets/images/award-1-134x98-inverse.png";
import "./Photographer.scss";

export const Photographer = () => {
  return (
    <>
      <Card className="city-card">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Work of Daniel kirk</Card.Title>
          <Card.Text>
            Daniel Kirk is specialized in story photography as he dictates peoples story through his work.
          </Card.Text>
          <Button variant="primary">Book me</Button>{" "}
          <Button variant="primary">View My Work</Button>
        </Card.Body>
      </Card>
    </>
  );
};
