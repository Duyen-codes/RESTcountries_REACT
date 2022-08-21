import React from "react";

const CountryCard = ({ name, population, region, flag, capital }) => {
  return (
    <>
      <img className="flag" src={flag} alt={name} />
      <div className="content">
        <h3 className="name">{name}</h3>
        <div>
          <span className="country-info">Population: </span>
          <span className="population">{population}</span>
        </div>
        <div>
          <span className="country-info">Region: </span>
          <span className="region">{region}</span>
        </div>

        <div>
          <span className="country-info">Capital: </span>
          <span className="capital">{capital}</span>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
