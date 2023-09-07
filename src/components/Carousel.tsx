import { useState } from "react";
import "../styles/carousel.css";

interface CarouselProps {
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>&#10094;</button>
      <img src={images[currentIndex]} />
      <button onClick={nextImage}>&#10095;</button>
    </div>
  );
}

export default Carousel;
