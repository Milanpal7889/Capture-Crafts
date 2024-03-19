import { Carousel, Image } from "react-bootstrap";
import image1 from "../../assets/images/home1-1-961x664.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import { Fancybox } from "@fancyapps/ui";

const settings = {
  centerMode: true,
  swipeToSlide: true,
  focusOnSelect: true,
  className: "inner-slide",
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
};
const slides = [
  {
    name: "Slide 1",
    image: image1,
  },
  {
    name: "Slide 2",
    image: image1,
  },
  {
    name: "Slide 3",
    image: image1,
  },
];

export const SliderBs = () => {
  return (
    <>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="inner-slide" height>
            <Image src={slide.image} alt={slide.name} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
