import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <a href="#" className="logo">
          Where in the world?
        </a>
        <button className="btn-toggle">
          <i className="fa-solid fa-moon"></i>
          <span>Dark Mode</span>
        </button>
      </header>
    </>
  );
};

export default Header;
