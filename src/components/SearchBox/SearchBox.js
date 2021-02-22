import React from "react";
import "./SearchBox.css";
const SearchBox = ({ onInputChange }) => {
  return (
    <div className="search-container">
      <input
        onChange={(e) => onInputChange(e.target.value)}
        className="search-input"
        type="text"
        placeholder="Type Keywords"
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default SearchBox;
