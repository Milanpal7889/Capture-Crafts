import { Button, Col, Container, Row } from "react-bootstrap";
import "./Categories.scss";
import { CardCompo } from "../../../commonComponents/CompoCard/CardCompo";
import { useEffect, useState } from "react";
import axios from "axios";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/allcategories"
        );
        if (!response?.data?.error) {
          const categoriesresData = await response?.data;
          setCategories(categoriesresData?.categories);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchdata();
  }, []);
  return (
    <Container className="categories">
      <Row>
        <Col>
          <h1 className="heading">Categories</h1>
        </Col>
        <Col className="text-end">
          <Button> create Category </Button>
        </Col>
      </Row>
      <Row>
        {categories?.map((category) => {
          return (
            <Col key={category._id} sm={12} md={4} lg={3}>
              <CardCompo category={category} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
