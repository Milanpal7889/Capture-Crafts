import { useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";


const Photographer = () => {
    const [show, setShow] = useState(false);
    return (
        <>
        <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="categoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  required
                  name="categoryname"
                  type="text"
                  placeholder="Enter Category Name"
                />
              </Form.Group>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Modal.Body>
        </Modal>
        <Card className="cardcompo">
          <Card.Header>
            <Card.Title className="text-center">
              {" "}
              <h3>photographers</h3>
            </Card.Title>
            <Card.Img variant="top" src="asdsa" />
          </Card.Header>
            <Card.Body>
              <>
                <Button onClick={() => console.log("hello")} variant="primary">
                  Book Photograher
                </Button>
              </>
            </Card.Body>
        </Card>
      </>
    );
};

export default Photographer