import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Select from "./Select";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const CountryList = ({ darkMode }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
      setFilteredCountries(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchCountries = (searchValue) => {
    setSearch(searchValue);
    if (search === "") {
      setFilteredCountries(countries);
    } else {
      const result = countries.filter((country) => {
        return country.name.official
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredCountries(result);
    }
  };

  const handleSelect = (selectedRegion) => {
    setSelect(selectedRegion);
    if (selectedRegion) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${selectedRegion}`
        );
        const data = await response.json();
        if (selectedRegion === "all") {
          fetchData();
          return;
        }
        setCountries(data);
        setFilteredCountries(data);
      };

      try {
        fetchSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={`app-body ${darkMode ? "light" : ""}`}>
      <section className="search-filter-container">
        <Search search={search} searchCountries={searchCountries} />
        <Select handleSelect={handleSelect} select={select} />
      </section>
      <div className={`cards ${darkMode ? "light" : ""}`}>
        {filteredCountries.map((country, index) => {
          return (
            <Link
              key={index}
              to={`${country.cca3}`}
              className="card"
              state={{ country: country, countries: countries }}
            >
              <CountryCard
                flag={country.flags.svg}
                name={country.name.official}
                population={country.population}
                region={country.region}
                capital={country.capital}
                code={country.cca3}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountryList;
