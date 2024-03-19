import { Container } from "react-bootstrap"
// import { SliderBs } from "../../../customComponents/carousel/Slider"
import "./Home.scss"
import { Portfolio } from "../../../customComponents/Portfolio/Portfolio"
import { Awards } from "../../../customComponents/Awards/Awards"
import { Blog } from "../../../customComponents/Blog/Blog"
import { Bookus } from "../../../customComponents/BookingForm/Bookus"
export const Home = () => {
    return (
        <Container className="home p-0" fluid>
            {/* <SliderBs /> */}
            <Portfolio />
            <Awards />
            <Blog />
            <Bookus />
        </Container>
    )
}