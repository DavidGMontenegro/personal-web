import "./styles/MyWork.css";
import PorfolioCard from "./components/PortfolioCard";
import data from "./assets/data";

function MyWork() {
  return (
    <div className="container">
      <div className="introduction">
        <h1>Portfolio Highlights</h1>
        <p>
          Explore my portfolio to discover a diverse range of projects, each
          showcasing my skills and expertise. From web applications and mobile
          apps to backend systems and data analysis tools, my work reflects a
          deep understanding of modern technologies.
        </p>
      </div>
      <div className="portfolio">
        {data.map((item) => (
          <div id="selectedCard">
            <PorfolioCard
              title={item.title}
              text={item.text}
              link={item.link}
              images={item.img}
            ></PorfolioCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWork;
