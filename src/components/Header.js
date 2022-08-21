import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = ({ switchMode, darkMode }) => {
  return (
    <>
      {/* <header className={darkMode ? "light" : ""}> */}
      <header className={`${classes.header} ${darkMode ? "light" : ""}`}>
        <Link to="/">
          <span>Where in the world?</span>
        </Link>
        <button className="btn-toggle" onClick={switchMode}>
          <i className={darkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
          <span>{darkMode ? `Dark Mode` : "Light Mode"}</span>
        </button>
      </header>
    </>
  );
};

export default Header;
