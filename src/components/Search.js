import React from "react";

const Search = ({ searchCountries }) => {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search for a country..."
        onChange={(e) => searchCountries(e.target.value)}
      />
    </div>
  );
};

export default Search;
