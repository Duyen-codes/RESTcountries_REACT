import React from "react";
import { Link } from "react-router-dom";

const Header = ({onClick, darkMode}) => {
  return (
    <>
      <header className={darkMode ? 'light' : ''}>
        <Link to="/">
          <span>Where in the world?</span>
        </Link>
        <button className="btn-toggle" onClick={onClick}>
          <i className="fa-solid fa-moon"></i>
          <span>Dark Mode</span>
        </button>
      </header>
    </>
  );
};

export default Header;
