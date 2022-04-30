import React, { Component } from "react";
import CountryCard from "./CountryCard";

const url = "https://restcountries.com/v3.1/all";

class CountryList extends Component {
  state = {
    countries: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
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
      <div className="cards">
        {this.state.countries.map((country) => {
          return <CountryCard info={country} key={country.numericCode} />;
        })}
      </div>
    );
  }
}

export default CountryList;
