import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "./Blog.scss";
import user1 from "../../assets/images/user-1-46x46.jpg";

const blogs = [
  {
    img: user1,
    heading: "Becoming a King and Queen for a Day",
    name: "lorem ipsum",
    time: "time",
    comments: "3 comments",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. up the bulk of the card's content.",
  },
  {
    img: user1,
    heading: "Becoming a King and Queen for a Day",
    name: "lorem ipsum",
    time: "time",
    comments: "3 comments",
    description:
      "Some quick example text to build on the card title ple text to build on the card title ple text to build on the card title and make up the bulk of the card's content. up the bulk of the card's content.",
  },
  {
    img: user1,
    heading: "Becoming a King and Queen for a Day",
    name: "lorem ipsum",
    time: "time",
    comments: "3 comments",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content. up the bulk of the card's content.",
  },
];
export const Blog = () => {
  return (
    <Container className="blog" fluid>
      <Row>
        <h1 className="heading-1">Blog</h1>
      </Row>
      <Row className="blog-row">
        {blogs.map((blog, index) => (
          <Col sm={12} md={4} key={index}>
            <Card className="blog-card">
              <Card.Header>
                <Card.Subtitle>
                  <ul className="meta">
                    <li className="date separator">
                      <time>{blog.time}</time>
                    </li>
                    <li>
                      <a href="#">{blog.comments}</a>
                    </li>
                  </ul>
                </Card.Subtitle>
                <Card.Title>
                  <h2 className="card-title">
                    <a href="#">{blog.heading}</a>
                  </h2>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text className="description">
                  {blog.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Container className="card-footer-container" fluid>
                  <Row className="card-footer-row">
                    <Col className="profile">
                      <Image
                        src={blog.img}
                        width="46px"
                        height="46px"
                        alt="award"
                      />
                      <h4 className="name">{blog.name}</h4>
                    </Col>
                  </Row>
                </Container>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
