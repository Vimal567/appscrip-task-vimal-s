import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Filter from "../../Components/Filter/Filter";

const Home = () => {
  const sortOptions = [
    { value: "Recommended", label: "RECOMMENDED" },
    { value: "Newest_First", label: "NEWEST FIRST" },
    { value: "Popular", label: "POPULAR" },
    { value: "High_To_Low", label: "PRICE : HIGH TO LOW" },
    { value: "Low_To_High", label: "PRICE : LOW TO HIGH" }
  ];


  const [selectedSortOption, setSelectedSortOption] = useState({ value: "Recommended", label: "RECOMMENDED" });
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="home-section">
      <Header />
      {/* Summary section */}
      <section className="summary-section">
        <div className="summary-container">
          <h1 className="summary-heading">
            DISCOVER OUR PRODUCTS
          </h1>
          <div className="summary-details">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </div>
        </div>
      </section>

      {/* Filter action desktop view */}
      <section className="filter-action-desktop">
        <span className="filter-action-container">
          <span className="product-count">3425 Items</span>
          <span className="filter-toggle">
            {showFilter ?
              <span onClick={() => setShowFilter(false)}>
                <img src="assets/hide-filter-icon.png" alt="hide" />
                HIDE FILTER
              </span>
              :
              <span onClick={() => setShowFilter(true)}>
                <img src="assets/show-filter-icon.png" alt="show" />
                SHOW FILTER
              </span>
            }
          </span>
        </span>
        <span>
          <Dropdown
            options={sortOptions}
            selected={selectedSortOption}
            onSelect={setSelectedSortOption}
          />
        </span>
      </section>

      {/* Filter action desktop view */}
      <section className="filter-action-mobile">
        <span className="filter-toggle">
          FILTER
        </span>
        <span className="divider">|</span>
        <span>
          <Dropdown
            options={sortOptions}
            selected={selectedSortOption}
            onSelect={setSelectedSortOption}
          />
        </span>
      </section>

      {/* Dashboard section */}
      <section className={`dashboard-section ${showFilter ? "grid-section" : ""}`}>
        <div className={`filter-menu ${showFilter ? "show" : "hide"}`}>
          <label>
            <input type="checkbox" /> CUSTOMIZABLE
          </label>
          <hr />
          <Filter title="Ideal For" options={["Men", "Women", "Baby & Kids"]} />
          <Filter title="Occasion" options={["Casual", "Party", "Wedding"]} />
          <Filter title="Work" options={["Office", "Remote", "Field"]} />
          <Filter title="Fabric" options={["Cotton", "Linen", "Wool"]} />
          <Filter title="Segment" options={["Luxury", "Budget", "Premium"]} />
          <Filter title="Suitable For" options={["Summer", "Winter", "Rainy"]} />
          <Filter title="Raw Materials" options={["Natural", "Synthetic"]} />
          <Filter title="Pattern" options={["Striped", "Plain", "Printed"]} />
        </div>
        <div className="products-section"></div>
      </section>
    </div>
  )
}

export default Home;