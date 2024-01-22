import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomCarousel.css";

function CustomCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/People/shutterstock_14467531.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="slide12-caption">
          <h3>Slide 1</h3>
          <p>
            This slide should contain a image backgroun along with a caption
            (title and summary text)
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <video autoPlay loop muted className="d-block w-100">
          <source src="/assets/Videos/UHCO-home-1.mp4" type="video/mp4" />
        </video>
        <Carousel.Caption className="slide12-caption">
          <h3>Slide 2</h3>
          <p>
            This slide should contain a video background with a caption (title
            and summary text)
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide3-background">
          <video controls className="centered-video">
            <source src="/assets/Videos/Comp 3.mp4" type="video/mp4" />
          </video>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slide4-animated-content">
          <img
            className="d-block w-100 animated-image"
            src="/assets/People/shutterstock_47356687.jpg"
            alt="Slide 4"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;
