import { Col, Container, Image, Row } from "react-bootstrap";
import "./Portfolio.scss";
import { Fancybox } from "@fancyapps/ui";
import image1 from "../../assets/hero_1.jpg";
import image2 from "../../assets/course_4.jpg";
import image3 from "../../assets/blog_1.jpg";
import image4 from "../../assets/course_6.jpg";
import image5 from "../../assets/p11.jpg";
import image6 from "../../assets/p22.jpg";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export const Portfolio = () => {
  Fancybox.bind("[data-fancybox]", {});
  return (
    <>
      <Container className="portfolio" fluid>
        <Row>
          <h1 className="heading-1">Portfolio</h1>
        </Row>

        <Row>
          <Container className="portfolio-images" fluid>
            <Row className="gallery">
              <Col xs={12} sm={6} lg={3} className="gallery-col">
                <a
                  href={image1}
                  className="link-1"
                  data-fancybox="gallery"
                >
                  <Image
                    className="link-image"
                    width="440"
                    height="327"
                    src={image1}
                    alt="image"
                  />
                  <div className="link-image-caption">
                    <p className="link-image-title heading-3">
                      Jane &amp; James
                    </p>
                    <p className="link-image-text">
                      If you are looking for high quality wedding photography, I
                      will be glad to help you.
                    </p>
                  </div>
                </a>
                <a
                  className="link-2"
                  href={image2}
                  data-fancybox="gallery"
                >
                  <Image
                    className="link-image"
                    width="444"
                    height="683"
                    src={image2}
                  />
                  <div className="link-image-caption">
                    <p className="link-image-title heading-3">
                      George &amp; Kate
                    </p>
                    <p className="link-image-text">
                      If you are looking for high quality wedding photography, I
                      will be glad to help you.
                    </p>
                  </div>
                </a>
              </Col>
              <Col xs={12} sm={6} lg={3} className="gallery-col">
                <a
                  className="link-3"
                  href={image4}
                  data-fancybox="gallery"
                >
                  <Image
                    className="link-image"
                    width="444"
                    height="683"
                    src={image4}
                  />
                  <div className="link-image-caption">
                    <p className="link-image-title heading-3">
                      George &amp; Kate
                    </p>
                    <p className="link-image-text">
                      If you are looking for high quality wedding photography, I
                      will be glad to help you.
                    </p>
                  </div>
                </a>
              </Col>
              <Col xs={12} sm={6} lg={3} className="gallery-col">
                <a
                  href={image5}
                  className="link-1"
                  data-fancybox="gallery"
                >
                  <Image
                    className="link-image"
                    width="440"
                    height="327"
                    src={image5}
                    alt="image"
                  />
                  <div className="link-image-caption">
                    <p className="link-image-title heading-3">
                      Jane &amp; James
                    </p>
                    <p className="link-image-text">
                      If you are looking for high quality wedding photography, I
                      will be glad to help you.
                    </p>
                  </div>
                </a>
                <a
                  className="link-2"
                  href={image6}
                  data-fancybox="gallery"
                >
                  <Image
                    className="link-image"
                    width="444"
                    height="683"
                    src={image6}
                  />
                  <div className="link-image-caption">
                    <p className="link-image-title heading-3">
                      George &amp; Kate
                    </p>
                    <p className="link-image-text">
                      If you are looking for high quality wedding photography, I
                      will be glad to help you.
                    </p>
                  </div>
                </a>
              </Col>
              <Col xs={12} sm={6} lg={3} className="gallery-col">
                <a
                  className="link-3"
                  href={image3}
                  data-fancybox="gallery"
                >
                  <Image
                    className="link-image"
                    width="444"
                    height="683"
                    src={image3}
                  />
                  <div className="link-image-caption">
                    <p className="link-image-title heading-3">
                      George &amp; Kate
                    </p>
                    <p className="link-image-text">
                      If you are looking for high quality wedding photography, I
                      will be glad to help you.
                    </p>
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
};
