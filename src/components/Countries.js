import React, { Component } from "react";

const url = "https://restcountries.com/v3.1/all";

class Countries extends Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((countries) => {
        this.setState({ countries: countries });
      });
  }
  render() {
    return (
      <section className="cards">
        {this.state.countries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;

          return (
            <div className="card">
              <img className="flag" src={flags.svg} alt={name.official} />
              <div className="content">
                <h3 className="name">{name.official}</h3>
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
            </div>
          );
        })}
      </section>
    );
  }
}

export default Countries;
