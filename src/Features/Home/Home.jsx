import Header from "../../Components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-section">
      <Header />

      <div className="summary-section">
        <div className="summary-container">
          <h1 className="summary-heading">
            DISCOVER OUR PRODUCTS
          </h1>
          <div className="summary-details">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;