import { useState } from "react";
import "../styles/PortfolioCard.css";
import Carousel from "./Carousel";

interface PortfolioCardProps {
  title: string;
  text: string;
  link: string;
  images: string[];
}

function PorfolioCard({ title, text, link, images }: PortfolioCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={isSelected ? "proyect-card large-card" : "proyect-card"}
      onClick={() => {
        setIsSelected(true);
      }}
    >
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="img-div">
        {isSelected ? (
          <Carousel images={images}></Carousel>
        ) : (
          <img src={images[0]} />
        )}
        <button className="show-code">Go to code</button>
      </div>
    </div>
  );
}

export default PorfolioCard;
