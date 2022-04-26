import React from "react";

const Filter = () => {
  return (
    <section className="search-filter-container">
      <form>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Search for a country..."
        />
      </form>

      <select name="regions" id="regions" aria-label="regions">
        <option value="">Filter by Region</option>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </section>
  );
};

export default Filter;
