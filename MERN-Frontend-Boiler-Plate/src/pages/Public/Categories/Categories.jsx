import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import "./Categories.scss";
import { CardCompo } from "../../../commonComponents/CompoCard/CardCompo";
import { useEffect, useState } from "react";
import axios from "axios";
import ToastBs from "../../../commonComponents/Toast/Toast";
import axiosConfig from "../../../helper/config";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [createCategory, setCreateCategory] = useState({
    categoryname: "",
  });
  const [file, setFile] = useState(null);
  const loggedIn = localStorage?.getItem("user") ? false : true;
  useEffect(() => {
    if (loggedIn) {
      window.location.href = "/login";
    }
  }, []);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("categoryname", createCategory.categoryname);
      const response = await axiosConfig.post("http://localhost:5000/api/admin/addcategory", formData);
      if (response?.data && !response.data.error) {
        const categoryDatares = response?.data;
        console.log(categoryDatares);
        window.location.reload();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(err.response.data.exists);
      console.error(err);
    }
    setShow(false);
  };
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/allcategories"
        );
        if (response?.data && !response.data.error) {
          const categoriesresData = response?.data;
          setCategories(categoriesresData?.categories || []);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.log(error?.message);
        setCategories([]);
      }
    };

    fetchdata();
  }, []);
  return (
    <>
      {error && <ToastBs message="Category already exists" type="danger" />}
      <Modal show={show} onHide={() => setShow(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={HandleSubmit}>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Category Image</Form.Label>
              <Form.Control
                // required
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                required
                onChange={(e) => {
                  setCreateCategory({
                    ...createCategory,
                    categoryname: e.target.value,
                  });
                }}
                value={createCategory.categoryname}
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
      <Container className="categories">
        <Row>
          <Col>
            <h1 className="heading">Categories</h1>
          </Col>
          <Col className="text-end">
            <Button onClick={() => setShow(true)}> create Category </Button>
          </Col>
        </Row>
        <Row className="my-4">
          {categories.map((category) => {
            return (
              <Col key={category._id} sm={12} md={4} lg={3}>
                <CardCompo category={category} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
