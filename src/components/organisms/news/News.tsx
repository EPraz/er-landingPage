import { useState } from "react";
import s1 from "../../../assets/img/s-1.jpg";
import s2 from "../../../assets/img/s-2.jpg";
import s3 from "../../../assets/img/s-3.png";

const images = [s1, s2, s3];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden">
      <div className="flex">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-1/12 h-12 bg-gray-300"
        >
          {"<"}
        </button>
        <div className="w-10/12 overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`slide ${index + 1}`}
                className="w-full"
              />
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-1/12 h-12 bg-gray-300"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
