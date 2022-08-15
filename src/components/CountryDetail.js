import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CountryDetail = ({darkMode}) => {

  let location = useLocation()
  let {country} = location?.state
  const languages = country?.languages
  const currencies = country?.currencies
  const [borderCountry, setBorderCountry] = useState('');
 

  const params = useParams()
  const navigate = useNavigate()

    const handleBorderClick = async (border) => {
      setBorderCountry(border.toLowerCase())
     await axios.get(`https://restcountries.com/v3.1/alpha/${borderCountry}`)
      .then(response => {
        country = response.data
        console.log('inside handleBorderclick', country)})
    }

    let name;

    const backToPrevious = () => {
      navigate('/');
    }

  return  (
    <div className={`country-detail-wrap ${darkMode ? 'light' : ''}`}>
      <button className="btn back-btn" onClick={backToPrevious}>
          <i className="fa-solid fa-arrow-left"></i>Back
      </button>
      <div className={`country-details ${darkMode ? 'light' : ''}`}>
        <img src={country.flags.svg} />

        <div className="country-content">
          <h3 className="modal-title"></h3>
          <div className="country-content-middle">
            <div className="content-middle-left">
              <div>
                <span className="native-name country-info">Native Name: </span>
                <span>{country?.name?.nativeName?.eng?.official || country?.name?.nativeName?.ara?.official}</span>
              </div>
              <div>
                <span className="population country-info">Population: </span>
                <span>{country.population}</span>
              </div>
              <div>
                <span className="region country-info">Region: </span>
                <span>{country.region}</span>
              </div>
              <div>
                <span className="sub-region country-info">Sub Region: </span>
                <span>{country.subregion}</span>
              </div>
              <div>
                <span className="capital country-info">Capital: </span>
                <span>{country.capital[0]}</span>
              </div>
            <a href={country.maps.googleMaps} target="_blank">{country.maps.googleMaps}</a>
              
            </div>

            <div className="content-middle-right">
              <div>
                <span className="domain country-info">
                  Top Level Domain:{" "}
                </span>
                <span></span>
              </div>
              <div>
                <span className="currency country-info">Currencies:</span>
               <span>{Object.values(currencies || {}).map((val, index) => {
                return <span key={index}>{val.name} {val.symbol}</span>
               })}
               </span>
              </div>

              <div>
                <span className="language country-info">Languages: </span>
                {Object.values(languages).map((val, index) => {
                  return <span key={index}>{val}</span>
                })}
              </div>
            </div>
          </div>

          <div className="border-country-container">
            <span>Border Countries:</span>
            <div className="country-buttons">
              {country?.borders?.map(border => {
                return <button className="border-country-btn">
                  {border}</button>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
