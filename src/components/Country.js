import React from "react";

const Country = (props) => {
  return (
    <div className="card">
      <img
        className="flag"
        src={props.country.flags.svg}
        alt={props.country.name.official}
      />
      <div className="content">
        <h3 className="name">{props.country.name.official}</h3>
        <div>
          <span className="country-info">Population: </span>
          <span className="population">{props.country.population}</span>
        </div>
        <div>
          <span className="country-info">Region: </span>
          <span className="region">{props.country.region}</span>
        </div>

        <div>
          <span className="country-info">Capital: </span>
          <span className="capital">{props.country.capital}</span>
        </div>
      </div>
    </div>
  );
};

export default Country;
