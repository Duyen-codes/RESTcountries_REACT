import React from "react";

const Search = (props) => {
  return (
    <div className="search-wrapper">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
