import React from "react";

const Select = ({ handleSelect }) => {
  return (
    <select
      name="regions"
      id="regions"
      aria-label="regions"
      onChange={(e) => handleSelect(e.target.value)}
    >
      <option value="" hidden>
        Filter by Region
      </option>
      <option value="all">All</option>
      <option value="africa">Africa</option>
      <option value="americas">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default Select;
