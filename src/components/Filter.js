import React from "react";
import Search from "./Search";
import Select from "./Select";

const Filter = (props) => {
  return (
    <section className="search-filter-container">
      <Search />

      <Select />
    </section>
  );
};

export default Filter;
