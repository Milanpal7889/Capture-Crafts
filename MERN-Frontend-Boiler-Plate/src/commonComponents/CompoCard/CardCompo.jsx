import { Button, Card } from "react-bootstrap";
import img1 from "../../assets/images/award-1-134x98-inverse.png";
import "./CardCompo.scss";

export const CardCompo = (Category) => {
  return (
    <>
      <Card className="cardcompo mt-3">
        <Card.Header>
          <Card.Title className="text-center">
            {" "}
            <h3>{Category.category?.categoryname}</h3>
          </Card.Title>
        <Card.Img variant="bottom" src={img1} />
        </Card.Header>
        {/* <Card.Img variant="top" src={Category.category?.imageUrl} /> */}
        <Card.Body>
          <Button variant="primary">Book me</Button>{" "}
          <Button variant="primary">View My Work</Button>
        </Card.Body>
      </Card>
    </>
  );
};
