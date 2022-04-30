import React from "react";
import { useParams, Link } from "react-router-dom";

class CountryDetails extends Component {
  render() {
    return (
      <div>
        <button class="btn back-btn">
          <i class="fa-solid fa-arrow-left"></i>Back
        </button>

        <div class="country-details">
          <img src="${country.flags.svg}" alt="${country.name.common} flag" />

          <div class="country-content">
            <h3 class="modal-title">${country.name.common}</h3>
            <div class="country-content-middle">
              <div class="content-middle-left">
                <div>
                  <span class="native-name country-info">Native Name:</span>
                  <span>${country.name.common}</span>
                </div>
                <div>
                  <span class="population country-info">Population: </span>
                  <span>${country.population}</span>
                </div>
                <div>
                  <span class="region country-info">Region: </span>
                  <span>${country.region}</span>
                </div>
                <div>
                  <span class="sub-region country-info">Sub Region: </span>
                  <span>${country.subregion}</span>
                </div>
                <div>
                  <span class="capital country-info">Capital: </span>
                  <span>${country.capital[0]}</span>
                </div>
              </div>

              <div class="content-middle-right">
                <div>
                  <span class="domain country-info">Top Level Domain: </span>
                  <span>${country.tld}</span>
                </div>
                <div>
                  <span class="currency country-info">Currencies:</span>
                  <span>${currency}</span>
                </div>

                <div>
                  <span class="language country-info">Languages: </span>
                  <span>${language}</span>
                </div>
              </div>
            </div>

            <div class="border-country-container">
              <span>Border Countries:</span>
              <div class="country-buttons">${borderCountries}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetails;
