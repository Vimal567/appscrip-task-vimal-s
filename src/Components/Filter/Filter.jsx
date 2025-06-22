import React, { useState } from "react";
import "./Filter.css";

const Filter = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const handleUnselectAll = () => {
    setSelected([]);
  };

  return (
    <div className="filter-section">
      <div className="filter-header" onClick={toggleOpen}>
        <strong>{title.toUpperCase()}</strong>
        <span className="arrow">
          {isOpen ? <img src="assets/collapse-icon.png" alt="collapse" /> : <img src="assets/expand-icon.png" alt="expand" />}
        </span>
      </div>
      <div className="filter-subtitle">
        {selected.length === 0 ? "All" : selected.join(", ")}
      </div>
      {isOpen && (
        <div className="filter-content">
          <div className="unselect" onClick={handleUnselectAll}>
            Unselect all
          </div>
          {options.map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
      <hr />
    </div>
  );
};

export default Filter;
