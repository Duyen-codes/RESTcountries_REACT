import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  console.log(props);
  return (
    <Link to={props.info.name.official} className="card">
      <img
        className="flag"
        src={props.info.flags.svg}
        alt={props.info.name.official}
      />
      <div className="content">
        <h3 className="name">{props.info.name.official}</h3>
        <div>
          <span className="country-info">Population: </span>
          <span className="population">{props.info.population}</span>
        </div>
        <div>
          <span className="country-info">Region: </span>
          <span className="region">{props.info.region}</span>
        </div>

        <div>
          <span className="country-info">Capital: </span>
          <span className="capital">{props.info.capital}</span>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
