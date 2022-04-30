import React from "react";

const Search = (props) => {
  return (
    <form>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search for a country..."
        onChange={() => searchHandler()}
      />
    </form>
  );
};

export default Search;
