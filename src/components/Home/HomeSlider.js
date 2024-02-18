import Slider from "react-slick";
import work from "../../assets/SliderImage/work.jpg";
import board from "../../assets/SliderImage/board.jpg";
import image3 from "../../assets/SliderImage/image3.jpg";
import world from "../../assets/SliderImage/world.jpg";

function HomeSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          paddingRight: "2rem",
          bottom: "5px",
          right: "0px",
          height: "3rem",
          backgroundColor: "#00000066",
        }}
      >
        <ul
          className="flex justify-end items-center w-full h-full"
          style={{ margin: "0px" }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };
  return (
    <div className="slider-container w-full h-full">
      <Slider {...settings}>
        <div className="w-full h-[500px] max-2xl:h-[450px]">
          <img
            className="w-full h-full object-cover"
            src={work}
            alt="sliderimage"
          />
        </div>
        <div className="w-full h-[500px] max-2xl:h-[450px]">
          <img
            className="w-full h-full object-cover"
            src={board}
            alt="sliderimage"
          />
        </div>
        <div className="w-full h-[500px] max-2xl:h-[450px]">
          <img
            className="w-full h-full object-cover"
            src={image3}
            alt="sliderimage"
          />
        </div>
        <div className="w-full h-[500px] max-2xl:h-[450px]">
          <img
            className="w-full h-full object-cover"
            src={world}
            alt="sliderimage"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
