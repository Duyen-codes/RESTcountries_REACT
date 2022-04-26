import React, { Component } from "react";
import Country from "./Country";

const url = "https://restcountries.com/v3.1/all";

class Countries extends Component {
  state = {
    countries: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((countries) => {
        this.setState({ countries: countries, isLoading: false });
      });
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <section className="cards">
        {this.state.countries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;
          return <Country country={country} key={numericCode} />;
        })}
      </section>
    );
  }
}

export default Countries;
