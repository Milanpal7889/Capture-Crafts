import { Button, Card } from "react-bootstrap";
import "./City.scss";
import img1 from "../../assets/images/award-1-134x98-inverse.png";
export const City = () => {
  return (
    <>
      <Card className="city-card">
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Las Vegas</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card{"'"}s content.
          </Card.Text>
          <Button variant="primary">Book City</Button>
        </Card.Body>
      </Card>
    </>
  );
};
