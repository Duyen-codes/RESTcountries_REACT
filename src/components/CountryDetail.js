import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`https://restcountries.com/v3.1/name/${this.props.params}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("from CountryDetail: ", data);
        this.setState({ data: data, isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <Link to="/">
          <button className="btn back-btn">
            <i className="fa-solid fa-arrow-left"></i>Back
          </button>
        </Link>
        <h2>Country detail is here</h2>
        <div className="country-details">
          <img src={this.state.data.flag} />

          <div className="country-content">
            <h3 className="modal-title"></h3>
            <div className="country-content-middle">
              <div className="content-middle-left">
                <div>
                  <span className="native-name country-info">Native Name:</span>
                  <span></span>
                </div>
                <div>
                  <span className="population country-info">Population: </span>
                  <span></span>
                </div>
                <div>
                  <span className="region country-info">Region: </span>
                  <span></span>
                </div>
                <div>
                  <span className="sub-region country-info">Sub Region: </span>
                  <span></span>
                </div>
                <div>
                  <span className="capital country-info">Capital: </span>
                  <span></span>
                </div>
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
                  <span></span>
                </div>

                <div>
                  <span className="language country-info">Languages: </span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="border-country-container">
              <span>Border Countries:</span>
              <div className="country-buttons"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
