import "./Awards.scss";
import bgimg from "../../assets/course_4.jpg";
import img1 from "../../assets/images/award-1-134x98-inverse.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

const awards = [
  {
    img: img1,
    heading: "heading 3 aoo",
    time: "time"
  },
  {
    img: img1,
    heading: "heading 3 aoo",
    time: "time"
  },
  {
    img: img1,
    heading: "heading 3 aoo",
    time: "time"
  },
  {
    img: img1,
    heading: "heading 3 aoo",
    time: "time"
  },
]

export const Awards = () => {
  return (
    <Container className="awards" fluid>
      <Row className="awards-container">
        <Parallax
          bgImage={bgimg}
          bgImageAlt="parallax background Image"
          // bgImageStyle={{ height: "1920px", maxWidth: "1244px"}}
          strength={220}
        >
          <Col className="awards-container-col d-md-flex">
            {awards.map((award, index) => (
              <article key={index} className="award m-auto">
                <Image src={award.img} width="134px" height="98px" alt="award" />
                <h3 className="heading">{award.heading}</h3>
                <div className="divider"></div>
                <time className="time">{award.time}</time>
              </article>
            ))}
          </Col>
        </Parallax>
      </Row>
    </Container>
  );
};
