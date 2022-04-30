import React, { Component } from "react";
import Search from "./Search";
import Select from "./Select";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

class Main extends Component {
  state = {
    countries: [],
    isLoading: false,
    searchTerm: "",
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
    return (
      <main>
        <section className="search-filter-container">
          <Search />
          <Select />
        </section>
        {this.state.isLoading && <p>Loading...</p>}
        {!this.state.isLoading && (
          <div className="cards">
            {this.state.countries.map((country, index) => (
              <Link key={index} to={`country/${country.cca2}`}>
                <CountryCard
                  flag={country.flags.svg}
                  name={country.name.official}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))}
          </div>
        )}
      </main>
    );
  }
}

export default Main;
